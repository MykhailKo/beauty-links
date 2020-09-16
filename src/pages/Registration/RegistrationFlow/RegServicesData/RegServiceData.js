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
      { name: "Маникюр обрезной", id: "cosm1", price: null },
      { name: "Педикюр", id: "cosm2", price: null },
      { name: "Коррекция бровей", id: "cosm3", price: null },
      { name: "Покрытие гель-лаком", id: "cosm4", price: null },
      { name: "Окрашивание волос", id: "cosm5", price: null },
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
            return (
              <ServiceBlock
                service={service}
                services={ServiceData.services}
                key={key}
                setService={(services) => {
                  setServiceData({
                    ...ServiceData,
                    services,
                  });
                }}
              />
            );
          })}
      </div>
      <Button text={"Продолжить"} onClick={nextStep} />
    </div>
  );
};

export default RegServiceData;
