import {
  IconArrowUp,
  IconArrowUpRight,
  IconChevronDown,
	IconPlus,
} from "@tabler/icons-react";
import React from "react";
import s from "./beats.module.scss";
import { NavLink, useOutletContext } from "react-router-dom";
import { useProfile } from "../../../hooks/useProfile";
import { Button } from "../../shared/button/button";

export const Beats = ({ beats }) => {
	const {data: profile} = useProfile()
	const [setModal] = useOutletContext()

  return (
    <div className={s.beatsWrapper}>
      <div className={s.beatsHeader}>
        <div className={s.header}>
          {profile?.role?.type !== 'artist' ? <div className={s.subtitle}>САМОЕ НОВОЕ</div> : null}
          <div className={s.title}>Биты 
					{profile?.role?.type === 'artist' ? <Button onClick={() => setModal('create-beat-modal')} label={<IconPlus size={16}/>} className={s.smallBtn}/> : null}
					</div>
        </div>
        <div className={s.sorts}>
          <div className={s.sortFlex}>
            Рейтинг
            <IconArrowUp />
          </div>
          <div className={s.sortFlex}>
            Жанр
            <IconChevronDown />
          </div>
        </div>
      </div>
      <table className={s.beatsTable}>
			{/* {
        "id": 2,
        "releaseDate": "2024-04-26T19:22:19.690529+04:00",
        "photo": "https://images.unsplash.com/photo-1535992165812-68d1861aa71e?q=80\u0026w=2490\u0026auto=format\u0026fit=crop\u0026ixlib=rb-4.0.3\u0026ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Бит 2",
        "link": "https://www.youtube.com/watch?v=1U2aVQDbJ3o",
        "genreID": 1,
        "genre": null,
        "userID": 2,
        "user": null,
        "isHide": false
    }, */}
        <thead>
          <th></th>
          <th>НАЗВАНИЕ</th>
          <th>Жанр</th>
          <th>АРТИСТ</th>
          <th>ДЛИТЕЛЬНОСТЬ</th>
          <th></th>
        </thead>
        <tbody>
          {beats?.map((el) => (
            <tr>
              <td>
                <div className={s.beatPercents}>100</div>
              </td>
              <td>{el?.title}</td>
              <td>{el?.genre}</td>
              <td>{el?.user?.name}</td>
              <td>{el?.duration}</td>
              <td>
								<NavLink to={'/beat/' + el.id}>
                	<IconArrowUpRight />
								</NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
