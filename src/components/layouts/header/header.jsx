import React from 'react'
import s from './header.module.scss'
import { NavLink } from 'react-router-dom';
import { useProfile } from '../../../hooks/useProfile';
import gravatar from 'gravatar'

export const Header = () => {
	const {data: profile} = useProfile()

	return (
		<header className={s.wrapper}>
			<div className='container'>
				<div className={s.flex}>
					<div className={s.btns}>
						<NavLink to={'/feed'} className={s.link}>Лента</NavLink>
						<NavLink to={'/profile'} className={s.profile}>
							<img src={gravatar.url(profile?.email, {s: '100', r: 'x', d: 'retro'}, false)} alt="" />
						</NavLink>
					</div>
				</div>
			</div>
		</header>
	)
}
