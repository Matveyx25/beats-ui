import React, { useEffect } from 'react'
import { Modal } from 'shared/modal/modal';
import { FormProvider, useForm } from 'react-hook-form';
import { Input } from 'shared/input/input';
import { Button } from 'shared/button/button';
import { Select } from 'shared/select/Select';
import s from './EditBeatModal.module.scss'
import { useGenres } from 'hooks/useGenres';
import { useUpdateBeat } from '../../../hooks/useUpdateBeat';
import { useBeatById } from '../../../hooks/useBeatById';

export const EditBeatModal = ({isOpen, setOpen, modalParams}) => {
	const {mutate: updateBeat} = useUpdateBeat()
	const {data: genres} = useGenres()
	const {data: beat, isFetched} = useBeatById(modalParams)
	
	const methods = useForm({
		mode: 'onTouched'
	})

	useEffect(() => {
		if(beat && genres){
			const genre = genres.find(el => el.id === beat?.genreID)
		
			methods.setValue('title', beat?.title)
			methods.setValue('photo', beat?.photo)
			methods.setValue('link', beat?.link)
			methods.setValue('genre_id', ({value: genre.id, label: genre.name}))
		}
	}, [beat, genres])

  const handleSubmit = methods.handleSubmit(data => {
		const payload = {
			title: data.title,
			photo: data.photo,
			link: data.link,
			genre_id: data.genre_id.value,
		}

		updateBeat({payload, id: modalParams})
		setOpen(null)
  })

	return (
		<Modal name={'edit-beat-modal'} {...{isOpen, setOpen}}>
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
						options={genres?.map(el => ({value: el.id, label: el.name}))}/>
					<div className={s.btns}>
						<Button label='Сохранить' className={s.button}/>
					</div>
				</form>
			</FormProvider>
		</Modal>
	)
}
