import React from 'react'
import s from './main.module.scss'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '../header/header';

export const MainLayout = () => {
	const location = useLocation()
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register'

	return (
		<div className={isAuthPage && s.isAuth}>
			<Header/>
			<main className={s.content}>
				<Outlet/>
			</main>
		</div>
	)
}