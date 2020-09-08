import React from "react";

import BlockTitle from "./BlockTitle/BlockTitle";
import BeautyLinksColumn from "./BeautyLinksColumn/BeautyLinksColumn";
import CardsAndCopyrightColumn from "./CardsAndCopyrightColumn/CardsAndCopyrightColumn";
import useWindowSize from "../../../hooks/useWindowSize";

import style from "./Footer.module.scss";
import widths from "../../../assets/scss/_widths.scss";
const Footer = () => {
  const [width] = useWindowSize();
  return (
    <footer className={style.Footer}>
      {width > parseInt(widths.break_lg) ? (
        <div className={style.container}>
          <div className={style.FooterColumn}>
            <div>
              <BlockTitle text={"О нас"} />
              <a href={"/"} className={style.BlockLink}>
                Наша история
              </a>
              <a href={"/"} className={style.BlockLink}>
                Как это работает
              </a>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <BlockTitle text={"Клиенту/специалисту"} />
              <a href={"/"} className={style.BlockLink}>
                Кабинет клиента
              </a>
            </div>
          </div>
          <div className={style.FooterColumn}>
            <div>
              <BlockTitle text={"Услуги"} />
              <a href={"/"} className={style.BlockLink}>
                Уход за волосами
              </a>
              <a href={"/"} className={style.BlockLink}>
                Уход за ногтями
              </a>
              <a href={"/"} className={style.BlockLink}>
                Косметолог
              </a>
              <a href={"/"} className={style.BlockLink}>
                Макияж
              </a>
              <a href={"/"} className={style.BlockLink}>
                Брови и ресницы
              </a>
              <a href={"/"} className={style.BlockLink}>
                Уход за телом
              </a>
              <a href={"/"} className={style.BlockLink}>
                Барберы
              </a>
              <a href={"/"} className={style.BlockLink}>
                Удаление волос
              </a>
            </div>
          </div>
          <BeautyLinksColumn />
          <div className={style.FooterColumn}>
            <div>
              <BlockTitle text={"Поддержка"} />
              <a href={"/"} className={style.BlockLink}>
                Обратная связь
              </a>
              <a href={"/"} className={style.BlockLink}>
                Вопросы и ответы
              </a>
              <a href={"/"} className={style.BlockLink}>
                Условия использования
              </a>
              <a href={"/"} className={style.BlockLink}>
                Политика конфиденциальности
              </a>
              <a href={"/"} className={style.BlockLink}>
                Cookies Policy
              </a>
            </div>
          </div>
          <CardsAndCopyrightColumn />
        </div>
      ) : (
        <div className={style.container}>
          <div className={style.mobileFooterLinks}>
            <BlockTitle text={"О нас"} link={""} />
            <BlockTitle text={"Клиенту/специалисту"} />
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
