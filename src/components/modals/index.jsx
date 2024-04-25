import React, { useEffect } from 'react'
import { CreateBeatModal } from './CreateBeatModal/CreateBeatModal';

export const Modals = ({isOpen, setOpen, setModalParams, modalParams}) => {
	useEffect(() => {
		if(!isOpen){
			setModalParams(null)
		}
	}, [isOpen])

	return (
		<div>
			<CreateBeatModal {...{isOpen, setOpen, modalParams}}/>
		</div>
	)
}
