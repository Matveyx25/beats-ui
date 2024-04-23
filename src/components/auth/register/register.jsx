import React from 'react'
import { NavLink } from 'react-router-dom'
import { Input } from 'shared/input/input'
import { Button } from 'shared/button/button';
import s from './register.module.scss'
import { FormProvider } from 'react-hook-form';

const errors = {
	401: 'Пароль или почта введены неверно',
	422: 'Почта уже используется',
}

export const Register = ({handleSubmit, referral, error, methods, formState}) => {
	const name = methods?.watch('name')
	const email = methods?.watch('email')
	const password = methods?.watch('password')
	const formFull = name && email && password

	const notValid = (!formState.isValid && formState.isDirty) || !formFull 
	
	return (
		<div className={s.wrapper}>
			<div className={s.card}>
				<h2 className={s.title}>
				Регистрация
					<p className={s.register}>
						Уже есть аккаунт?
						<NavLink to={'/login'}> Войти</NavLink>
					</p>
				</h2>
				<FormProvider {...methods}>
					{error && <span className={s.error}>{errors[error?.status]}</span>}
					<form onSubmit={handleSubmit} className={s.form}>
						<Input 
							placeholder='Иван' 
							name='name' 
							className={s.input}
							title='Ваше имя'
							validation={{
								required: {
									value: true,
									message: 'Заполните поле',
								},
								minLength: {
									value: 2,
									message: 'Минимум 2 символов',
								},
								maxLength: {
									value: 255,
									message: 'Максимум 255 символов',
								},
								validate: {
									matchPattern: (v) =>
									/^[А-ЯЁ][а-яё]*$/.test(v) ||
										"Имя заполнено не верно",
								},
						}}/>
						<Input 
							placeholder='example@gmail.com' 
							name='email' 
							className={s.input}
							title='Ваша эл. почта'
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
							title='Пароль'
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
						<Button label='Создать аккаунт' className={s.button} disabled={notValid}/>
					</form>
				</FormProvider>
			</div>
		</div>
	)
}
