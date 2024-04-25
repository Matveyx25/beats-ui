import React from 'react'
import s from './Feed.module.scss'
import { Snippet } from '../../../components/feed/snippet/snippet'
import { Author } from '../../../components/feed/author/author'
import { Beats } from '../../../components/feed/beats/beats'

const snippets = [
	{
		name: "вышел покурить",
		start: '2:30',
		end: ' 2:40',
		status: 'verified'
	},
	{
		name: "вышел покурить",
		start: '2:30',
		end: ' 2:40',
	},
	{
		name: "вышел покурить",
		start: '2:30',
		end: ' 2:40',
		status: 'verified'
	},
	{
		name: "вышел покурить",
		start: '2:30',
		end: ' 2:40',
	},
	{
		name: "вышел покурить",
		start: '2:30',
		end: ' 2:40',
	},
	{
		name: "вышел покурить",
		start: '2:30',
		end: ' 2:40',
		status: 'verified'
	},
]

const authors = [
	{
		img: 'https://upload.wikimedia.org/wikipedia/ru/d/dc/MichaelScott.png',
		name: 'Название артиста'
	},
	{
		img: 'https://upload.wikimedia.org/wikipedia/ru/d/dc/MichaelScott.png',
		name: 'Название артиста'
	},
	{
		img: 'https://upload.wikimedia.org/wikipedia/ru/d/dc/MichaelScott.png',
		name: 'Название артиста'
	},
	{
		img: 'https://upload.wikimedia.org/wikipedia/ru/d/dc/MichaelScott.png',
		name: 'Название артиста'
	},
	{
		img: 'https://upload.wikimedia.org/wikipedia/ru/d/dc/MichaelScott.png',
		name: 'Название артиста'
	},
	{
		img: 'https://upload.wikimedia.org/wikipedia/ru/d/dc/MichaelScott.png',
		name: 'Название артиста'
	},
	{
		img: 'https://upload.wikimedia.org/wikipedia/ru/d/dc/MichaelScott.png',
		name: 'Название артиста'
	},
	{
		img: 'https://upload.wikimedia.org/wikipedia/ru/d/dc/MichaelScott.png',
		name: 'Название артиста'
	},
]

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

export const Feed = () => {
	return (
		<div className={s.wrapper}>
			<div className="container">
				<div className={s.header}>
					<div className={s.subtitle}>САМОЕ ГОРЯЧЕЕ</div>
					<div className={s.title}>Сниппеты</div>
				</div>
				<div className={s.flex}>
					<div className={s.main}>
						<div className={s.snippetsWrapper}>
							<div className={s.snippetsFlex}>
								{snippets.map(el => <Snippet {...el}/>)}
							</div>
						</div>
						<Beats {...{beats}}/>
					</div>
					<div className={s.sidebar}>
						<div className={s.header}>
							<div className={s.authorsWrapper}>
								<div className={s.subtitle}>ТОП</div>
								<div className={s.title}>Артисты</div>
								<div className={s.authorsFlex}>
									{authors.map(el => <Author {...el}/>)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
