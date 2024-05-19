import React from 'react'
import s from './purchases.module.scss'
import { NavLink } from 'react-router-dom'
import { IconArrowUpRight } from '@tabler/icons-react'
import { getNoun } from '../../../helpers/getNoun'

export const Purchases = ({beats}) => {
  return (
    <div className={s.beatsWrapper}>
      <div className={s.beatsHeader}>
        <div className={s.header}>
          <div className={s.title}>
							Сделки
          </div>
        </div>
      </div>
			{beats?.map((el) =>{

			return (
				<div className={s.beatsTableCard}>	
					<table className={s.beatsTable}>
						<tbody>
								<tr>
									<td>
										<div className={s.beatPercents}>100</div>
									</td>
									<td>{el.beat?.title}</td>
									<td>{el.beat?.genre?.name}</td>
									<td>{el.beat?.user?.name}</td>
									<td>
										<NavLink to={"/beat/" + el.beat.id}>
											<IconArrowUpRight />
										</NavLink>
									</td>
								</tr>
								<tr>
									<td>{el.license?.licenseType.name}</td>
									<td></td>
									<td>Данный бит сдан в лизинг: {el.purchased +
                " " +
                getNoun(el.purchased, "человеку", "людям", "людям")}</td>
									<td></td>
									<td>{el.license?.price} ₽</td>
								</tr>
						</tbody>
					</table>
				</div>
      )})}
    </div>
  );
}