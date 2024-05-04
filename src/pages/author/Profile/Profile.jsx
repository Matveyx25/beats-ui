import React from 'react'
import s from './Profile.module.scss'
import { Beats } from '../../../components/feed/beats/beats';
import { useProfile } from '../../../hooks/useProfile';
import { Button } from '../../../components/shared/button/button';
import { IconPencil } from '@tabler/icons-react';
import { useAuthorById } from '../../../hooks/useAuthorById';
import { auth } from 'services';
import { getAvatar } from '../../../helpers/getAvatar';
import { useOutletContext } from 'react-router-dom';

export const Profile = () => {
	const {data: profile} = useProfile()
	const {data: artist} = useAuthorById(profile?.id)
	const [setModal] = useOutletContext()

	return (
		<div className={s.wrapper}>
			<div className="container">
				<div className={s.authorName}>
					{profile?.name} <Button label={<IconPencil size={16}/>} className={s.smallBtn} onClick={() => setModal('edit-profile-modal')}/>
				</div>
				<div className={s.authorBanner}>
					<img src="https://images.unsplash.com/photo-1660846194677-96299f2713f7?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
					<div className={s.authorAvatar}>
						<img src={getAvatar(profile?.email)} alt="" />
					</div>
				</div>
				<Beats beats={artist?.beats.map(el => ({...el, user: profile}))}/> 
				<Button label="Выйти" className={s.logout} onClick={() => auth.logout()}/>
			</div>
		</div>
	)
}
