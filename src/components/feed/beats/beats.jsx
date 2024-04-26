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
          {profile?.role?.name !== 'author' ? <div className={s.subtitle}>САМОЕ НОВОЕ</div> : null}
          <div className={s.title}>Биты 
					{profile?.role?.name === 'author' ? <Button onClick={() => setModal('create-beat-modal')} label={<IconPlus size={16}/>} className={s.smallBtn}/> : null}
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
        <thead>
          <th></th>
          <th>НАЗВАНИЕ</th>
          <th>Жанр</th>
          <th>АРТИСТ</th>
          <th>ДЛИТЕЛЬНОСТЬ</th>
          <th></th>
        </thead>
        <tbody>
          {beats.map((el) => (
            <tr>
              <td>
                <div className={s.beatPercents}>100</div>
              </td>
              <td>{el.name}</td>
              <td>{el.genre}</td>
              <td>{el.author}</td>
              <td>{el.duration}</td>
              <td>
								<NavLink to={'/beat/98'}>
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
