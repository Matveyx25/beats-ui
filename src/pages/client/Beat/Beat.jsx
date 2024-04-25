import React from 'react'
import { BackButton } from '../../../components/shared/backButton/backButton'
import s from './Beat.module.scss'

export const Beat = () => {
	return (
		<div className={s.wrapper}>
			<div className="container">
				<BackButton/>
				<div className={s.preview}>
					<div className={s.previewImg}>
						<div className={s.status}>Verified</div>
						<img src="https://www.premadepixels.com/wp-content/uploads/2020/11/Unknown-Album-Cover-PP1.jpg" alt="" />
					</div>
					<div className={s.previewInfo}>
						<div className={s.genre}>Жанр</div>
						<div className={s.name}>Название песни</div>
						<div className={s.author}>Артист</div>
					</div>
				</div>
				<div className={s.description}>
					<div className={s.descriptionBlock}>
						<div className={s.descriptionLabel}>Date of release</div>
						<div className={s.descriptionValue}>Дата</div>
					</div>
					<div className={s.descriptionBlock}>
						<div className={s.descriptionLabel}>Audio</div>
						<div className={s.descriptionValue}>Link: ссылка-1</div>
					</div>
					<div className={s.descriptionBlock}>
						<div className={s.descriptionLabel}>Demo</div>
						<div className={s.descriptionValue}>2:30 - 2:44</div>
					</div>
					<div className={s.descriptionBlock}>
						<div className={s.descriptionLabel}>Snippet</div>
						<div className={s.descriptionValue}>2:30 - 2:44</div>
					</div>
				</div>
				<div className={s.sells}>
					<div className={s.title}>
						Варианты продажи
					</div>
					<div className={s.sellsFlex}>
						<div className={s.sellsBlock}>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
