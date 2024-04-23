import { IconLoader2 } from '@tabler/icons-react'
import React from 'react'
import s from './loader.module.scss'

export const Loader = ({size = 40}) => {
	return (
		<div className={s.loaderFullScreen}>
			<IconLoader2 className={s.loader} size={size}/>
		</div>
	)
}
