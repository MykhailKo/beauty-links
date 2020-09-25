import React, { useState, useRef, useEffect, useCallback } from "react";

import Button from "../../../../components/Button/Button";
import SecTitle from "../../../../components/SecTitle/SecTitle";
import SubTitle from "../../../../components/SubTitle/SubTitle";
import ServiceCarousel from "../../../../components/ServiceCarousel/ServiceCarousel";
import ServiceBlock from "../../../../components/ServiceBlock/ServiceBlock";
import Preloader from "../../../../components/Preloader/Preloader";
import { useHttp } from "../../../../hooks/useHttp";

import styles from "./RegServiceData.module.scss";

// import services from "../../../../services";

const RegServiceData = ({ nextStep, setServiceData, ServiceData }) => {
  const { loading, request } = useHttp();
  const [serviceCats, setServiceCats] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(17);
  const [searchString, setSearchString] = useState("");
  const [matches, setMatches] = useState([]);
  const fetchServices = useCallback(async () => {
    try {
      console.log("sending request");
      const services = await request("/api/v1.0/services", "GET", null, {});
      console.log(services);
      if (services.status === 200) {
        delete services.status;
        const result = Object.values(services);
        setServiceCats(result);

        setMatches(
          result.filter((cat) => cat.id === currentCategory)[0]?.sub_services
        );
      }
    } catch (error) {
      console.log(error);
    }
  }, [currentCategory, request]);

  useEffect(() => {
    if (serviceCats.length === 0) {
      fetchServices();
    }
  }, [fetchServices, serviceCats.length]);

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

  const updateFiltration = (id) => {
    const filteredOrNot = id
      ? serviceCats.filter((cat) => cat.id === id)[0]?.sub_services
      : searchString === ""
      ? serviceCats.filter((cat) => cat.id === currentCategory)[0]?.sub_services
      : searchServices(searchString);
    setMatches(filteredOrNot);
    console.log(matches);
  };
  return (
    <div className={styles.regServiceWrap}>
      <SecTitle title={"Давайте перенесём ваш бизнес в онлайн!"} />
      <SubTitle
        text={
          "Для начала, добавьте свои основные услуги и цены. Не переживайте, вы сможете их изменить в любое время в своём личном кабинете."
        }
      />
      {serviceCats.length === 0 ? (
        <Preloader height="30vh" />
      ) : (
        <>
          <ServiceCarousel
            serviceCats={serviceCats}
            setServiceCats={setServiceCats}
            currentCategory={currentCategory}
            setCurrentCategory={(id) => {
              setCurrentCategory(id);

              updateFiltration(id);
            }}
            clearSearch={() => setSearchString("")}
          />
          <div className={styles.searchWrap}>
            <button
              onClick={() => {
                updateFiltration();
              }}
            ></button>
            <input
              type={"text"}
              placeholder={"Искать услугу..."}
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
          </div>
          <div className={styles.serviceListWrap}>
            {matches.length === 0 ? (
              <p>По в вашему запросы сервисов не найдено.</p>
            ) : (
              matches.map((service, key) => {
                return (
                  <ServiceBlock
                    service={service}
                    services={ServiceData}
                    key={key}
                    setService={(services) => {
                      setServiceData([...services]);
                    }}
                  />
                );
              })
            )}
          </div>
        </>
      )}

      <Button
        text={"Продолжить"}
        onClick={nextStep}
        disabled={ServiceData.length === 0 || loading}
      />
    </div>
  );
};

export default RegServiceData;
