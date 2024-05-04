import React from 'react'
import s from './Feed.module.scss'
import { Snippet } from '../../../components/feed/snippet/snippet'
import { Author } from '../../../components/feed/author/author'
import { Beats } from '../../../components/feed/beats/beats'
import { useBeats } from '../../../hooks/useBeats';
import { useAuthors } from '../../../hooks/useAuthors';
import { useSnippets } from '../../../hooks/useSnippets';

export const Feed = () => {
	const {data: beats} = useBeats()
	const {data: snippets} = useSnippets()
	const {data: authors} = useAuthors()
 
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
								{snippets && snippets.map(el => <Snippet {...el}/>)}
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
									{authors?.map(el => <Author {...el}/>)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
