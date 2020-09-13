import React from "react";

import Button from "../../../../components/Button/Button";
import RegTitle from "../../RegTitle/RegTitle";
import RegSubTitle from "../../RegSubTitle/RegSubTitle";
import ServiceCarousel from "../../../../components/ServiceCarousel/ServiceCarousel";

import styles from "./RegServiceData.module.scss";

const serviceCats = [
  { name: "Косметология", id: "cosm" },
  { name: "Маникюр/педикюр", id: "nails" },
  { name: "Массаж и SPA", id: "spa" },
  { name: "Уход за волосами", id: "hair" },
  { name: "Стоматология", id: "stomat" },
  { name: "Эпиляция", id: "epil" },
  { name: "Макияж", id: "makeup" },
];

const RegServiceData = ({ nextStep }) => {
  return (
    <div className={styles.regServiceWrap}>
      <RegTitle text={"Давайте перенесём ваш бизнес в онлайн!"} />
      <RegSubTitle
        text={
          "Для начала, добавьте свои основные услуги и цены. Не переживайте, вы сможете их изменить в любое время в своём личном кабинете."
        }
      />
      <ServiceCarousel serviceCats={serviceCats} />
      <Button text={"Продолжить"} onClick={nextStep} />
    </div>
  );
};

export default RegServiceData;
