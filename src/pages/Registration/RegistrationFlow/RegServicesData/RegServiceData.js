import React, { useState, useRef } from "react";

import Button from "../../../../components/Button/Button";
import SecTitle from "../../../../components/SecTitle/SecTitle";
import SubTitle from "../../../../components/SubTitle/SubTitle";
import ServiceCarousel from "../../../../components/ServiceCarousel/ServiceCarousel";
import ServiceBlock from "../../../../components/ServiceBlock/ServiceBlock";

import { useHttp } from "../../../../hooks/useHttp";

import styles from "./RegServiceData.module.scss";

import services from "../../../../services";

const RegServiceData = ({ nextStep, setServiceData, ServiceData }) => {
  // const { loading, request } = useHttp();
  // const services = async () => {
  //   try {
  //     const services = await request(
  //       "/api/v1.0/services",
  //       "GET",
  //       {},
  //       {}
  //     )
  //     console.log(services)
  //     return services;
  //   }catch(error){
  //     console.log(error);
  //   }
  // }

  const [currentCategory, setCurrentCategory] = useState(17);
  const [serviceCats, setServiceCats] = useState(services);
  const [searchString, setSearchString] = useState("");

  const searchInputRef = useRef();

  const searchServices = (schStr) => {
    let searchResults = [];
    serviceCats.forEach((cat) => {
      searchResults = searchResults.concat(
        cat.sub_services.filter((service) =>
          service.name.toLowerCase().includes(schStr.toLowerCase())
        )
      );
    });
    return searchResults;
  };

  const matches =
    searchString === ""
      ? serviceCats.filter((cat) => cat.id === currentCategory)[0]?.sub_services
      : searchServices(searchString);

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
        setServiceCats={setServiceCats}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        clearSearch={() => setSearchString("")}
      />
      <div className={styles.searchWrap}>
        <button
          onClick={() => {
            setSearchString(searchInputRef.current.value);
          }}
        ></button>
        <input
          type={"text"}
          placeholder={"Искать услугу..."}
          ref={searchInputRef}
        />
      </div>
      <div className={styles.serviceListWrap}>
        {matches.length === 0 ? (
          <p>Сервисы по Вашему запросу не найдены.</p>
        ) : (
          matches.map((service, key) => {
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
          })
        )}
      </div>
      <Button text={"Продолжить"} onClick={nextStep} />
    </div>
  );
};

export default RegServiceData;
