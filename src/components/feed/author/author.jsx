import React from 'react'
import s from './author.module.scss'
import { NavLink } from 'react-router-dom';
import gravatar from 'gravatar'

export const Author = (props) => {
	const { name, email, id } = props;

	return (
		<NavLink className={s.card} to={'/author/' + id}>
			<div className={s.avatar}>
				<img src={gravatar.url(email, {s: '100', r: 'x', d: 'retro'}, false)} alt="" />
			</div>
			<div className={s.name}>{name}</div>
		</NavLink>
	)
}
