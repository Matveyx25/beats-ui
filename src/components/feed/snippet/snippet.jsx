import React from 'react'
import s from './snippet.module.scss'

export const Snippet = (props) => {
	const { name, start, end, status } = props;

	return (
		<div className={s.card}>
			<img src="https://www.premadepixels.com/wp-content/uploads/2020/11/Unknown-Album-Cover-PP1.jpg" alt="" />
			{status === 'verified' && <div className={s.status}>Verified</div>}
			<div className={s.info}>
				<p>Отрывок: {start} - {end}</p>
				<p>Ссылка: cсылка</p>
			</div>
			<div className={s.nameBlock}>
				<div className={s.title}>
					Название
				</div>
				<div className={s.subtitle}>
					вышел покурить
				</div>
			</div>
		</div>
	)
}
