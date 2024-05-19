import React from 'react'
import s from './snippet.module.scss'
import { useBeatById } from '../../../hooks/useBeatById';
import { NavLink } from 'react-router-dom';

export const Snippet = (props) => {
	const { start, end, status, BeatID } = props;
	const {data: beat} = useBeatById(BeatID)

	return (
		<NavLink to={'/beat/' + BeatID} className={s.card}>
			<img src={beat?.photo} alt="" />
			{status === 'verified' && <div className={s.status}>Verified</div>}
			<div className={s.info}>
				<p>Отрывок: {start} - {end}</p>
				<p>Ссылка: <a href={beat?.link}>cсылка</a></p>
			</div>
			<div className={s.nameBlock}>
				<div className={s.title}>
					{beat?.title}
				</div>
				<div className={s.subtitle}>
					{beat?.user?.name}
				</div>
			</div>
		</NavLink>
	)
}
