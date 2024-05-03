import React, { useState } from 'react'
import s from './main.module.scss'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '../header/header';
import { Modals } from '../../modals';

export const MainLayout = () => {
	const [modal, setOpen] = useState('')
	const [modalParams, setModalParams] = useState(null)
	
	const setModal = (name, params) => {
		setModalParams(params)
		setOpen(name)
	}

	const location = useLocation()
  const isSecondBg = ['profile', 'author'].includes(location.pathname.split('/')[1])

	return (
		<div>
			<Modals isOpen={modal} setOpen={setOpen} {...{modalParams, setModalParams}}/>
			<div className={s.bg}>
				<img src={isSecondBg ? '/images/bg-login.jpg' : '/images/bg-register.jpg'} alt="" />
			</div>
			<Header/>
			<main className={s.content}>
				<Outlet context={[setModal]}/>
			</main>
		</div>
	)
}