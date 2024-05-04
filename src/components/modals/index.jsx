import React, { useEffect } from 'react'
import { CreateBeatModal } from './CreateBeatModal/CreateBeatModal';
import { EditDemoModal } from './EditDemoModal/EditDemoModal';
import { EditSnippetModal } from './EditSnippetModal/EditSnippetModal';
import { EditBeatModal } from './EditBeatModal/EditBeatModal';
import { DeleteBeatModal } from './DeleteBeatModal/DeleteBeatModal';
import { EditProfileModal } from './EditProfileModal/EditProfileModal';

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
			<EditBeatModal {...{isOpen, setOpen, modalParams}}/>
			<EditProfileModal {...{isOpen, setOpen, modalParams}}/>
			<DeleteBeatModal {...{isOpen, setOpen, modalParams}}/>
		</div>
	)
}
