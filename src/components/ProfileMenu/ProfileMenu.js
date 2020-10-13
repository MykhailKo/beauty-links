import React, { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

import useWindowSize from "../../hooks/useWindowSize";
import Stars from "../Stars/Stars";

import styles from "./ProfileMenu.module.scss";
import widths from "../../assets/scss/_widths.scss";
import authContext from "../../context/auth.context";

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
  {
    name: "Основное",
    icon: "/assets/img/icons/basics.png",
    link: "/user/masterbasics/",
  },
  {
    name: "Календарь",
    icon: "/assets/img/icons/calendar.png",
    link: "/user/calendar/",
  },
  {
    name: "Бронирования",
    icon: "/assets/img/icons/bookings.png",
    link: "/user/bookings/",
  },
  {
    name: "Услуги",
    icon: "/assets/img/icons/services.png",
    link: "/user/services/",
  },
  {
    name: "Рабочие часы",
    icon: "/assets/img/icons/workinghours.png",
    link: "/user/workinghours/",
  },
  {
    name: "Локации",
    icon: "/assets/img/icons/locations.png",
    link: "/user/locations/",
  },
  {
    name: "Мой профиль",
    icon: "/assets/img/icons/profile.png",
    link: "/user/masterprofile/",
  },
  {
    name: "Настройки",
    icon: "/assets/img/icons/settings.png",
    link: "/user/settings/",
  },
  {
    name: "Пригласить людей",
    icon: "/assets/img/icons/invite.png",
    link: "/user/invite/",
  },
  {
    name: "Выйти из аккаунта",
    icon: "/assets/img/icons/logout.png",
    link: "user/logout/",
  },
];

const ProfileMenu = ({
  type = "client",
  rate = 0,
  reviews = 0,
  masterName = "Mary K.",
}) => {
  const currentControls = type === "client" ? clientControls : masterControls;

  const [currentControl, setControl] = useState(currentControls[0].name);

  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  const [width] = useWindowSize();

  const { logout } = useContext(authContext);
  const history = useHistory();
  return (
    <nav className={styles.sideBarMenu}>
      {type === "master" && width > parseInt(widths.break_lm) && (
        <div className={styles.masterMenuHeader}>
          <span className={styles.masterName}>{masterName}</span>
          <Stars rate={rate} />
          <span className={styles.reviewsCount}>{reviews} отзывов</span>
        </div>
      )}
      {type === "client" && width > parseInt(widths.break_lm) && (
        <div className={styles.clientMenuHeader}></div>
      )}
      {width < parseInt(widths.break_lm) && (
        <div
          className={styles.mobileMenuHeader}
          onClick={() => setMobileMenuOpened(!mobileMenuOpened)}
        >
          <div>{currentControl}</div>
          <span
            className={mobileMenuOpened ? styles.rotateArrow : styles.arrow}
          >
            &#9660;
          </span>
        </div>
      )}
      <ul
        className={styles.profileControls}
        style={
          width < parseInt(widths.break_lm) && mobileMenuOpened
            ? { height: `${2.7 * currentControls.length}em` }
            : { height: "0" }
        }
      >
        {currentControls.map((control, key) => {
          return (
            <li key={key} onClick={() => setControl(control.name)}>
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
