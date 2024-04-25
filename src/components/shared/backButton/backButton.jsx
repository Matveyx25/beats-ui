import { IconArrowLeft } from '@tabler/icons-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import s from './backButton.module.scss'

export const BackButton = () => {
	const navigate = useNavigate()

	return (
		<button className={s.backBtn} onClick={() => navigate(-1)}><IconArrowLeft/>Back</button>
	)
}
