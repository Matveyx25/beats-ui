import React, { useEffect } from 'react'
import { Modal } from 'shared/modal/modal';
import { FormProvider, useForm } from 'react-hook-form';
import { Input } from 'shared/input/input';
import { Button } from 'shared/button/button';
import s from './EditProfileModal.module.scss'
import { useProfile } from 'hooks/useProfile';
import { useUpdateProfile } from '../../../hooks/useUpdateProfile';

export const EditProfileModal = ({isOpen, setOpen}) => {
	const {mutate: updateProfile} = useUpdateProfile()
	const {data: profile} = useProfile()
	
	const methods = useForm({
		mode: 'onTouched'
	})

	useEffect(() => {
		if(profile){
			methods.setValue('name', profile?.name)
			methods.setValue('email', profile?.email)
		}
	}, [profile])

  const handleSubmit = methods.handleSubmit(data => {
		const payload = {
			Username: data?.name,
			email: data?.email,
		}

		updateProfile(payload)
		setOpen(null)
  })

	return (
		<Modal name={'edit-profile-modal'} {...{isOpen, setOpen}}>
			<FormProvider {...methods}>
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
					<div className={s.btns}>
						<Button label='Сохранить' className={s.button}/>
					</div>
				</form>
			</FormProvider>
		</Modal>
	)
}
