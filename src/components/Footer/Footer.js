import React from "react";

import BlockTitle from "./BlockTitle/BlockTitle";
import BeautyLinksColumn from "./BeautyLinksColumn/BeautyLinksColumn";
import CardsAndCopyrightColumn from "./CardsAndCopyrightColumn/CardsAndCopyrightColumn";
import useWindowSize from "../../hooks/useWindowSize";

import styles from "./Footer.module.scss";
import widths from "../../assets/scss/_widths.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  const [width] = useWindowSize();
  return (
    <footer className={styles.Footer}>
      {width > parseInt(widths.break_lg) ? (
        <div className={styles.container}>
          <div className={styles.FooterColumn}>
            <div>
              <BlockTitle text={"О нас"} />
              <a href={"/"} className={styles.BlockLink}>
                Наша история
              </a>
              <a href={"/"} className={styles.BlockLink}>
                Как это работает
              </a>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <BlockTitle text={"Клиенту/специалисту"} />
              <Link to="/user" className={styles.BlockLink}>
                Кабинет клиента
              </Link>
            </div>
          </div>
          <div className={styles.FooterColumn}>
            <div>
              <BlockTitle text={"Услуги"} />
              <a href={"/"} className={styles.BlockLink}>
                Уход за волосами
              </a>
              <a href={"/"} className={styles.BlockLink}>
                Уход за ногтями
              </a>
              <a href={"/"} className={styles.BlockLink}>
                Косметолог
              </a>
              <a href={"/"} className={styles.BlockLink}>
                Макияж
              </a>
              <a href={"/"} className={styles.BlockLink}>
                Брови и ресницы
              </a>
              <a href={"/"} className={styles.BlockLink}>
                Уход за телом
              </a>
              <a href={"/"} className={styles.BlockLink}>
                Барберы
              </a>
              <a href={"/"} className={styles.BlockLink}>
                Удаление волос
              </a>
            </div>
          </div>
          <BeautyLinksColumn />
          <div className={styles.FooterColumn}>
            <div>
              <BlockTitle text={"Поддержка"} />
              <a href={"/"} className={styles.BlockLink}>
                Обратная связь
              </a>
              <a href={"/"} className={styles.BlockLink}>
                Вопросы и ответы
              </a>
              <a href={"/"} className={styles.BlockLink}>
                Условия использования
              </a>
              <a href={"/"} className={styles.BlockLink}>
                Политика конфиденциальности
              </a>
              <a href={"/"} className={styles.BlockLink}>
                Cookies Policy
              </a>
            </div>
          </div>
          <CardsAndCopyrightColumn />
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.mobileFooterLinks}>
            <BlockTitle text={"О нас"} />
            <Link to="/user" style={{ textDecoration: "none" }}>
              <BlockTitle text={"Клиенту/специалисту"} />
            </Link>
            <BlockTitle text={"Услуги"} />
            <BlockTitle text={"Поддержка"} />
          </div>
          <BeautyLinksColumn />

          <CardsAndCopyrightColumn />
        </div>
      )}
    </footer>
  );
};

export default Footer;
