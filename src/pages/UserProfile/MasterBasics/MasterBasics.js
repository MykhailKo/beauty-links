import React from "react";
import { Link } from "react-router-dom";

import ProfileTitle from "../../../components/ProfileTitle/ProfileTitle";
import MasterBasicAction from "../../../components/MasterBasicAction/MasterBasicAction";

import styles from "./MasterBasics.module.scss";

const MasterBasics = ({ master }) => {
  const masterId = 1;

  const basicActions = [
    {
      name: "Загрузить фото профиля",
      completed: true /*master.avatar === ""*/,
    },
    {
      name: "Загрузить фото в портфолио",
      completed: true /*master.work_images.length === 0*/,
    },
    { name: "Добавить описание о себе", completed: true /*master.bio === ""*/ },
    { name: "Настроить свой календарь", completed: false },
    { name: "Подключить банковскую карту", completed: false },
  ];

  return (
    <div className={styles.basicsWrap}>
      <ProfileTitle title={"Основное"} />
      <ul className={styles.basicActions}>
        {basicActions.map((action, key) => {
          return (
            <MasterBasicAction
              completed={action.completed}
              name={action.name}
              key={key}
            />
          );
        })}
      </ul>
      <div className={styles.ordersDashboardWrap}>
        <h2>Заказы</h2>
        <div className={styles.ordersDashboard}>
          <li>
            <p>общее число</p>
            <span>12</span>
          </li>
          <li>
            <p>текущие </p>
            <span>4</span>
          </li>
          <li>
            <p>всего заработано </p>
            <span>14800грн</span>
          </li>
        </div>
      </div>
      <Link to={`/master/${masterId}`}>просмотреть свой профиль</Link>
    </div>
  );
};

export default MasterBasics;
