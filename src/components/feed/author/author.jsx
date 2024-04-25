import React from 'react'
import s from './author.module.scss'
import { NavLink } from 'react-router-dom';

export const Author = (props) => {
	const { name, img } = props;

	return (
		<NavLink className={s.card} to={'/author/24'}>
			<div className={s.avatar}>
				<img src={img} alt="" />
			</div>
			<div className={s.name}>{name}</div>
		</NavLink>
	)
}
