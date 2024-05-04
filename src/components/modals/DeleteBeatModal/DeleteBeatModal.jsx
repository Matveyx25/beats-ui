import React, { useEffect } from 'react'
import { Modal } from 'shared/modal/modal';
import s from './DeleteBeatModal.module.scss'
import { Button } from 'shared/button/button';
import { useBeatById } from '../../../hooks/useBeatById';
import { useDeleteBeat } from '../../../hooks/useDeleteBeat';

export const DeleteBeatModal = ({isOpen, setOpen, modalParams}) => {
	const {mutate: deleteBeat} = useDeleteBeat()
	const {data: beat} = useBeatById(modalParams)
	
	const onDelete = () => {
		deleteBeat(modalParams)
		setOpen(null)
  }

	return (
		<Modal title="Удалить бит" name={'delete-beat-modal'} {...{isOpen, setOpen}}>
				<div className={s.wrapper}>
					<div className={s.title}>
						Уверены, что хотите удалить бит: <div className={s.strong}>{beat?.title}</div>
					</div>
					<div className={s.btns}>
						<Button label='Да' className={s.button} onClick={onDelete}/>
						<Button label='Нет' className={s.button} onClick={setOpen}/>
					</div>
				</div>
		</Modal>
	)
}
