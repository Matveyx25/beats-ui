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

export const Register = ({handleSubmit, error, methods, formState}) => {
	const name = methods?.watch('name')
	const email = methods?.watch('email')
	const password = methods?.watch('password')
	const retypePassword = methods?.watch('retypePassword')
	const formFull = name && email && password

	const notValid = (!formState.isValid && formState.isDirty) || !formFull 

	const validatePasswordMatch = (value) => {
		if (value !== password) {
			 return 'Пароли не совпадают';
		}
		return true;
	 };
	
	return (
		<div className={s.wrapper}>
			<div className={s.bg}>
				<img src="/images/bg-register.jpg" alt="" />
			</div>
			<div className={s.card}>
				<h2 className={s.title}>Регистрация</h2>
				<FormProvider {...methods}>
					{error && <span className={s.error}>{errors[error?.status]}</span>}
					<form onSubmit={handleSubmit} className={s.form}>
						<Input 
							placeholder='nickname' 
							name='name' 
							className={s.input}
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
						}}/>
						<Input 
							placeholder='e-mail' 
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
							placeholder='password' name="password" 
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
						<Input 
							type="password" 
							placeholder='retype password' name="retypePassword" 
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
								validate: {
									passwordMatch: validatePasswordMatch,
								}
						}}/>
						<Input 
							type="radio" 
							name="role" 
							className={s.input}
							title='Выберите роль'
							options={[
								{ value: 'author', label: 'Я артист' },
								{ value: 'buyer', label: 'Я покупатель' },
							]}
						/>
						<p className={s.register}>
						Уже есть аккаунт ? <br/> Тогда <NavLink to={'/login'}> войдите</NavLink>.
						</p>
						<div className={s.btns}>
							<Button label='Регистрация' className={s.button} disabled={notValid}/>
						</div>
					</form>
				</FormProvider>
			</div>
		</div>
	)
}
