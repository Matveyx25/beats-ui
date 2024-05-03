import React from 'react'
import { Modal } from 'shared/modal/modal';
import { FormProvider, useForm } from 'react-hook-form';
import { Input } from 'shared/input/input';
import { Button } from 'shared/button/button';
import s from './EditDemoModal.module.scss'
import { useCreateDemo } from '../../../hooks/useCreateDemo';

export const EditDemoModal = ({isOpen, setOpen, modalParams}) => {
	const {mutate: createDemo} = useCreateDemo()
	
	const methods = useForm({
		mode: 'onTouched'
	})

  const handleSubmit = methods.handleSubmit(data => {
		const payload = {
			beat_id: +modalParams,
			start: data.start,
			end: data.end
		}

		createDemo(payload)
		setOpen(null)
  })

	return (
		<Modal name={'edit-demo-modal'} {...{isOpen, setOpen}}>
			<FormProvider {...methods}>
				<form onSubmit={handleSubmit} className={s.form}>
					<Input 
						placeholder='Начало' 
						name='start' 
						className={s.input}
						validation={{
							required: {
								value: true,
								message: 'Заполните поле',
							},
							pattern: {
								value: /^[0-5]?[0-9]:[0-5]?[0-9]$/,
								message: 'Введите время правильно',
							}
					}}/>
					<Input 
						placeholder='Конец' 
						name='end' 
						className={s.input}
						validation={{
							required: {
								value: true,
								message: 'Заполните поле',
							},
							pattern: {
								value: /^[0-5]?[0-9]:[0-5]?[0-9]$/,
								message: 'Введите время правильно',
						}
					}}/>
					<div className={s.btns}>
						<Button label='Сохранить' className={s.button}/>
					</div>
				</form>
			</FormProvider>
		</Modal>
	)
}
