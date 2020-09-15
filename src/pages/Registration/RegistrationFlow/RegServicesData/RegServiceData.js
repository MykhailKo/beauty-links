import React, { useState } from "react";

import Button from "../../../../components/Button/Button";
import SecTitle from "../../../../components/SecTitle/SecTitle";
import SubTitle from "../../../../components/SubTitle/SubTitle";
import ServiceCarousel from "../../../../components/ServiceCarousel/ServiceCarousel";
import ServiceBlock from "../../../../components/ServiceBlock/ServiceBlock";

import styles from "./RegServiceData.module.scss";

const serviceCats = [
  {
    name: "Косметология",
    id: "cosm",
    services: [
      { name: "Маникюр обрезной" },
      { name: "Педикюр" },
      { name: "Коррекция бровей" },
      { name: "Покрытие гель-лаком" },
      { name: "Окрашивание волос" },
    ],
  },
  { name: "Маникюр/педикюр", id: "nails", services: [] },
  { name: "Массаж и SPA", id: "spa", services: [] },
  { name: "Уход за волосами", id: "hair", services: [] },
  { name: "Стоматология", id: "stomat", services: [] },
  { name: "Эпиляция", id: "epil", services: [] },
  { name: "Макияж", id: "makeup", services: [] },
];

const RegServiceData = ({ nextStep, setServiceData, ServiceData }) => {
  return (
    <div className={styles.regServiceWrap}>
      <SecTitle title={"Давайте перенесём ваш бизнес в онлайн!"} />
      <SubTitle
        text={
          "Для начала, добавьте свои основные услуги и цены. Не переживайте, вы сможете их изменить в любое время в своём личном кабинете."
        }
      />
      <ServiceCarousel
        serviceCats={serviceCats}
        setCat={(currentCat) => {
          setServiceData({ ...ServiceData, currentCat });
        }}
        currentCat={ServiceData.currentCat}
      />
      <div className={styles.searchWrap}>
        <button></button>
        <input type={"text"} placeholder={"Искать услугу..."} />
      </div>
      <div className={styles.serviceListWrap}>
        {serviceCats
          .filter((cat) => cat.id === ServiceData.currentCat)[0]
          .services.map((service, key) => {
            return <ServiceBlock service={service.name} key={key} />;
          })}
      </div>
      <Button text={"Продолжить"} onClick={nextStep} />
    </div>
  );
};

export default RegServiceData;
