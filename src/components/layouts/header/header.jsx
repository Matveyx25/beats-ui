import React from 'react'
import s from './header.module.scss'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'shared/button/button';

export const Header = () => {
	const location = useLocation()
	const navigate = useNavigate()
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register'

	return (
		<header className={`${s.wrapper} ${isAuthPage && s.isAuth}`}>
			<div className='container'>
				<div className={s.flex}>
					<div className={s.btns}>
						<Button label={'Войти'} className={s.btn} onClick={() => navigate('/login')}/>
					</div>
				</div>
			</div>
		</header>
	)
}
