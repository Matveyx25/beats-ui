import React from 'react'
import { BackButton } from '../../../components/shared/backButton/backButton'
import s from './Beat.module.scss'
import { IconInfoCircle } from '@tabler/icons-react'
import { Button } from '../../../components/shared/button/button'
import { NavLink, useParams } from 'react-router-dom'
import { useBeatById } from '../../../hooks/useBeatById';
import { getNoun } from '../../../helpers/getNoun'
import { useBuyBeat } from '../../../hooks/usуBuyBeat';

const LicenseGroup = ({beat ,name, label, peopleCount}) => {
	const {mutate: buy} = useBuyBeat()
	const getLicense = (type) => beat?.licenses?.find(el => el.licenseType.type === type)

	if(!getLicense(name).isActive) return null

	return (
			<div className={s.sellsBlock}>
				<div className={s.sellsHeader}>
					<div className={s.sellsTitle}>
						{label + " "}
						<IconInfoCircle
							size={20}
							color="rgba(255, 255, 255, 0.2)"
						/>
					</div>
					<Button label="Купить" className={s.smallBtn} onClick={() => {
						buy({
							beatId: beat.id, licenseId: getLicense(name).id
						})
					}}/>
				</div>
				{peopleCount && <div className={s.sellsInfo}>
					<div className={s.sellsLabel}>Данный бит сдан в лизинг:</div>
					<div className={s.sellsValue}>{peopleCount + ' ' + getNoun(peopleCount, 'человеку', 'людям', 'людям')}</div>
				</div>}
				{getLicense(name).price +  " ₽"  || 'цена не указана'}
			</div>
	)
}

export const Beat = () => {
	const {beatId} = useParams()
	const {data: beat, isFetched} = useBeatById(beatId)

	if(!isFetched) return null

	return (
		<div className={s.wrapper}>
			<div className="container">
				<BackButton/>
				<div className={s.preview}>
					<div className={s.previewImg}>
						<img src={beat?.photo} alt="" />
					</div>
					<div className={s.previewInfo}>
            <div className={s.genre}>{beat?.genreID}</div>
            <div className={s.name}>{beat?.title}</div>
            <div className={s.author}>{beat?.user?.name}</div>
          </div>
				</div>
				<div className={s.description}>
					<div className={s.descriptionBlock}>
						<div className={s.descriptionLabel}>Date of release</div>
						<div className={s.descriptionValue}>
						{new Date(beat?.releaseDate).toLocaleDateString("ru-RU", {
                dateStyle: "medium",
              })}
						</div>
					</div>
					<div className={s.descriptionBlock}>
						<div className={s.descriptionLabel}>Audio</div>
						<div className={s.descriptionValue}>
							<NavLink to={beat?.link} className={s.descriptionValue}>
								Link
							</NavLink>
						</div>
					</div>
					<div className={s.descriptionBlock}>
						<div className={s.descriptionLabel}>Demo</div>
						<div className={s.descriptionValue}>
							{beat?.demos ? 
								beat.demos.map(el => <div className={s.descriptionValue}>
									{el.start} - {el.end}
								</div>)
							: (
								<div className={s.descriptionValue}>00:00 - 00:00</div>
							)}
						</div>
					</div>
					<div className={s.descriptionBlock}>
						<div className={s.descriptionLabel}>Snippet</div>
						<div className={s.descriptionValue}>
							{beat?.snippets ? 
								beat.snippets.map(el => <div className={s.descriptionValue}>
									{el.start} - {el.end}
								</div>)
							: (
								<div className={s.descriptionValue}>00:00 - 00:00</div>
							)}
						</div>
					</div>
				</div>
				<div className={s.sells}>
					<div className={s.title}>
						Варианты продажи
					</div>
					<div className={s.sellsFlex}>
						<LicenseGroup name={'non-inclusive'} label={'Non-inclusive'} peopleCount={5} {...{beat}}/>
						<LicenseGroup name={'inclusive'} label={'Inclusive'} peopleCount={1} {...{beat}}/>
						<LicenseGroup name={'tor'} label={'Transfer of right'} {...{beat}}/>
					</div>
				</div>
			</div>
		</div>
	)
}
