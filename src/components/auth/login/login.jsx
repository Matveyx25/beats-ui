import React from 'react'
import { NavLink } from 'react-router-dom'
import { Input } from 'shared/input/input'
import { Button } from 'shared/button/button';
import s from './login.module.scss'
 
const errors = {
	401: 'Пароль или почта введены неверно',
}

export const Login = ({handleSubmit, error, formState, methods}) => {
	const email = methods?.watch('email')
	const password = methods?.watch('password')
	const formFull = email && password

	const submitting = formState.isSubmitting || (formState.isSubmitted && !error)
	const notValid = (!formState.isValid && formState.isDirty) || !formFull  || submitting

	return (
		<div className={s.wrapper}>
			<div className={s.card}>
				<h2 className={s.title}>
					Авторизация
					<p className={s.register}>
						Новый пользователь?
						<NavLink to={'/sign-up'}> Создать аккаунт</NavLink>
					</p>
				</h2>
				{error && <span className={s.error}>{errors[error?.status]}</span>}
				<form onSubmit={handleSubmit} className={s.form}>
					<Input 
					placeholder='Email' 
					name='email' 
					className={s.input}
					validation={{
						required: {
							value: true,
							message: 'Заполните поле',
						},
						validate: {
							maxLength: (v) =>
								v.length <= 50 || "Почта должна содержать не более 50 символов.",
							matchPattern: (v) =>
								/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
								"Адрес электронной почты недействителен.",
						},
					}}/>
					<Input 
					type="password" 
					placeholder='Пароль' name="password" 
					className={s.input}
					validation={{
						required: {
							value: true,
							message: 'Поле незаполнено',
						},
						minLength: {
							value: 8,
							message: 'Минимум 8 символов',
						},
						maxLength: {
							value: 50,
							message: 'Максимум 50 символов',
						},
					}}/>
					<Button label='Войти' className={s.button} disabled={notValid} fetching={submitting}/>
				</form>
			</div>
		</div>
	)
}
