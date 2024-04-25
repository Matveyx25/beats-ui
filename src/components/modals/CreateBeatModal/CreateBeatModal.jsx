import React from 'react'
import { Modal } from 'shared/modal/modal';
import { FormProvider, useForm } from 'react-hook-form';
import { Input } from 'shared/input/input';
import { Button } from 'shared/button/button';
import { Select } from 'shared/select/Select';
import s from './CreateBeatModal.module.scss'
import { useCreateBeat } from '../../../hooks/useCreateBeat';

export const CreateBeatModal = ({isOpen, setOpen}) => {
	const {mutate: createBeat} = useCreateBeat()
	
	const methods = useForm({
		mode: 'onTouched'
	})

  const handleSubmit = methods.handleSubmit(data => {
		const payload = {
			title: data.title,
			photo: data.photo,
			link: data.link,
			genre_id: data.genre_id.value,
		}

		createBeat(payload)
		setOpen(null)
  })

	return (
		<Modal name={'create-beat-modal'} {...{isOpen, setOpen}}>
			<FormProvider {...methods}>
				<form onSubmit={handleSubmit} className={s.form}>
					<Input 
						placeholder='Название бита' 
						name='title' 
						className={s.input}
						validation={{
							required: {
								value: true,
								message: 'Заполните поле',
							}
					}}/>
					<Input 
						placeholder='Ссылка на обложку' 
						name='photo' 
						className={s.input}
						validation={{
							required: {
								value: true,
								message: 'Заполните поле',
							}
					}}/>
					<Input 
						placeholder='Ссылка на бит' 
						name='link' 
						className={s.input}
						validation={{
							required: {
								value: true,
								message: 'Заполните поле',
							}
					}}/>
					<Select
					control={methods.control}
					name={'genre_id'}
					placeholder={'Выбрать жанр'}
					options={[
							{value: 1, label: 'Genre 1'},
							{value: 2, label: 'Genre 2'},
							{value: 3, label: 'Genre 3'},
						]}/>
					<div className={s.btns}>
						<Button label='Создать' className={s.button}/>
					</div>
				</form>
			</FormProvider>
		</Modal>
	)
}
