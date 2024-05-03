import React from 'react'
import s from './author.module.scss'
import { NavLink } from 'react-router-dom';
import { getAvatar } from '../../../helpers/getAvatar';

export const Author = (props) => {
	const { name, email, id } = props;

	return (
		<NavLink className={s.card} to={'/author/' + id}>
			<div className={s.avatar}>
				<img src={getAvatar(email)} alt="" />
			</div>
			<div className={s.name}>{name}</div>
		</NavLink>
	)
}
