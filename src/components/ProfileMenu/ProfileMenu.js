import React from "react";
import { NavLink } from "react-router-dom";

import Stars from "../Stars/Stars";

import styles from "./ProfileMenu.module.scss";

const clientControls = [
  {
    name: "Мои достижения",
    icon: "/assets/img/icons/achivments.png",
    link: "/user/achievements/",
  },
  {
    name: "Бронирования",
    icon: "/assets/img/icons/bookings.png",
    link: "/user/bookings/",
  },
  {
    name: "Настройки",
    icon: "/assets/img/icons/settings.png",
    link: "/user/settings/",
  },
  {
    name: "Избранные мастера",
    icon: "/assets/img/icons/favs.png",
    link: "/user/favourites/",
  },
  {
    name: "Выйти из аккаунта",
    icon: "/assets/img/icons/logout.png",
    link: "user/logout/",
  },
];

const masterControls = [
  { name: "Основное", icon: "/assets/img/icons/basics.png", link: "" },
  { name: "Календарь", icon: "/assets/img/icons/calendar.png", link: "" },
  { name: "Бронирования", icon: "/assets/img/icons/bookings.png", link: "" },
  { name: "Услуги", icon: "/assets/img/icons/services.png", link: "" },
  {
    name: "Рабочие часы",
    icon: "/assets/img/icons/workinghours.png",
    link: "",
  },
  { name: "Локации", icon: "/assets/img/icons/locations.png", link: "" },
  { name: "Мой профиль", icon: "/assets/img/icons/profile.png", link: "" },
  { name: "Настройки", icon: "/assets/img/icons/settings.png", link: "" },
  { name: "Пригласить людей", icon: "/assets/img/icons/invite.png", link: "" },
  { name: "Выйти из аккаунта", icon: "/assets/img/icons/logout.png", link: "" },
];

const ProfileMenu = ({
  type = "client",
  rate = 0,
  reviews = 0,
  masterName = "Mary K.",
}) => {
  const currentControls = type === "client" ? clientControls : masterControls;

  return (
    <nav className={styles.sideBarMenu}>
      {type === "master" && (
        <div className={styles.masterMenuHeader}>
          <span className={styles.masterName}>{masterName}</span>
          <Stars rate={rate} />
          <span className={styles.reviewsCount}>{reviews} отзывов</span>
        </div>
      )}
      {type === "client" && <div className={styles.clientMenuHeader}></div>}
      <ul className={styles.profileControls}>
        {currentControls.map((control, key) => {
          return (
            <li key={key}>
              <NavLink
                to={control.link}
                activeClassName={styles.controlActive}
                className={styles.control}
              >
                <span
                  className={styles.controlIcon}
                  style={{ backgroundImage: `url(${control.icon})` }}
                ></span>
                {control.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ProfileMenu;
