import React from 'react'
import s from './button.module.scss'
import { IconLoader2 } from '@tabler/icons-react'
import { NavLink } from 'react-router-dom'

const themes = {
	primary: {
		className: s.primary,
		color: '#fff'
	},
	secondary: {
		className: s.secondary,
		color: '#A7AEB8'
	},
	telegram: {
		className: s.telegram,
		color: '#fff'
	},
}

export const Button = (props) => {
	const {theme = 'primary', fetching, to, target, rightIcon, leftIcon, children, label, className, onClick, disabled, size = 'normal'} = props
	return (
		<>
		{!to || disabled ?
			<button {...props} onClick={disabled || onClick} className={`${className || ''} ${s.button} ${themes[theme].className} ${fetching ? s.fetching : ''} ${size === 'small' ? s.small  : ''}  ${disabled ? s.disabled : ''}`} disabled={disabled}>
				{fetching ? 
					<div className={s.iconWrapper}>
						<IconLoader2 color={themes[theme].color} className={s.loader}/>
					</div>
					: 
					<>
						{leftIcon}
						<span>{label || children}</span>
						{rightIcon}
					</>
				}
			</button> :
			<NavLink to={to} className={`${className || ''} ${s.button} ${themes[theme].className} ${fetching ? s.fetching : ''} ${size === 'small' ? s.small  : ''}`} target={target}>
				{fetching ? 
					<div className={s.iconWrapper}>
						<IconLoader2 color={themes[theme].color} className={s.loader}/>
					</div>
					: 
					<>
						{leftIcon}
						<span>{label}</span>
						{rightIcon}
					</>
				}
			</NavLink>
		}		
		</>
	)
}


