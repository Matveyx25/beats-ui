import React from 'react'
import s from './header.module.scss'
import { NavLink } from 'react-router-dom';
import { useProfile } from '../../../hooks/useProfile';
import { getAvatar } from '../../../helpers/getAvatar';

export const Header = () => {
	const {data: profile} = useProfile()

	return (
		<header className={s.wrapper}>
			<div className='container'>
				<div className={s.flex}>
					<div className={s.btns}>
						{profile.role.name === 'client' && <NavLink to={'/feed'} className={s.link}>Лента</NavLink>}
						<NavLink to={'/profile'} className={s.profile}>
							<img src={getAvatar(profile?.email)} alt="" />
						</NavLink>
					</div>
				</div>
			</div>
		</header>
	)
}
