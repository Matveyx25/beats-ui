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

export const Beats = ({ beats, title, subtitle, hideSubtitle }) => {
	const {data: profile} = useProfile()
	const [setModal] = useOutletContext()

  return (
    <div className={s.beatsWrapper}>
      <div className={s.beatsHeader}>
        <div className={s.header}>
          {!hideSubtitle &&
            (subtitle || profile?.role?.type !== "artist" ? (
              <div className={s.subtitle}>САМОЕ НОВОЕ</div>
            ) : null)}
          <div className={s.title}>
            {title ? title :
              <>
							Биты {profile?.role?.type === "artist" ? (
                <Button
                  onClick={() => setModal("create-beat-modal")}
                  label={<IconPlus size={16} />}
                  className={s.smallBtn}
                />
              ) : null}
							</>}
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
          <th></th>
        </thead>
        <tbody>
          {beats?.map((el) => (
            <tr>
              <td>
                <div className={s.beatPercents}>100</div>
              </td>
              <td>{el?.title}</td>
              <td>{el?.genre?.name}</td>
              <td>{el?.user?.name}</td>
              <td>
                <NavLink to={"/beat/" + el.id}>
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
