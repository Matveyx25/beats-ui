import React from 'react'
import s from './Author.module.scss'
import { BackButton } from '../../../components/shared/backButton/backButton';
import { Beats } from '../../../components/feed/beats/beats';
import { useAuthorById } from '../../../hooks/useAuthorById';
import { useParams } from 'react-router-dom';
import { getAvatar } from '../../../helpers/getAvatar';


const beats = [
	{
		name:'НАЗВАНИЕ',
		genre:'Жанр',
		author:'АРТИСТ',
		duration:'ДЛИТЕЛЬНОСТЬ',
	},
	{
		name:'НАЗВАНИЕ',
		genre:'Жанр',
		author:'АРТИСТ',
		duration:'ДЛИТЕЛЬНОСТЬ',
	},
	{
		name:'НАЗВАНИЕ',
		genre:'Жанр',
		author:'АРТИСТ',
		duration:'ДЛИТЕЛЬНОСТЬ',
	},
	{
		name:'НАЗВАНИЕ',
		genre:'Жанр',
		author:'АРТИСТ',
		duration:'ДЛИТЕЛЬНОСТЬ',
	},
	{
		name:'НАЗВАНИЕ',
		genre:'Жанр',
		author:'АРТИСТ',
		duration:'ДЛИТЕЛЬНОСТЬ',
	},
]

export const Author = () => {
	const {authorId} = useParams()
	const {data: artist} = useAuthorById(authorId)

	return (
		<div className={s.wrapper}>
			<div className="container">
				<BackButton/>
				<div className={s.authorName}>
					{artist?.name}
				</div>
				<div className={s.authorBanner}>
					<img src="https://images.unsplash.com/photo-1660846194677-96299f2713f7?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
					<div className={s.authorAvatar}>
						<img src={getAvatar(artist?.email)} alt="" />
					</div>
				</div>
				<Beats beats={artist?.beats.map(el => ({...el, user: {name: artist.name}}))}/> 
			</div>
		</div>
	)
}
