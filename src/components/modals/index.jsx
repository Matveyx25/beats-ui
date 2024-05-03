import React, { useEffect } from 'react'
import { CreateBeatModal } from './CreateBeatModal/CreateBeatModal';
import { EditDemoModal } from './EditDemoModal/EditDemoModal';
import { EditSnippetModal } from './EditSnippetModal/EditSnippetModal';

export const Modals = ({isOpen, setOpen, setModalParams, modalParams}) => {
	useEffect(() => {
		if(!isOpen){
			setModalParams(null)
		}
	}, [isOpen])

	return (
		<div>
			<CreateBeatModal {...{isOpen, setOpen, modalParams}}/>
			<EditDemoModal {...{isOpen, setOpen, modalParams}}/>
			<EditSnippetModal {...{isOpen, setOpen, modalParams}}/>
		</div>
	)
}
