import React, { useState, useEffect, useContext, useCallback } from "react";

import ServiceBlock from "../../../../components/ServiceBlock/ServiceBlock";

import { useHttp } from "../../../../hooks/useHttp";
import authContext from "../../../../context/auth.context";

import styles from "./ServicesGroup.module.scss";
import Preloader from "../../../../components/Preloader/Preloader";

const ServicesGroup = ({ category, masterServices, setMasterServices }) => {
  const [searchString, setSerarchString] = useState("");
  const [matches, setMatches] = useState(category.sub_services);
  const { token } = useContext(authContext);
  const { request, loading } = useHttp();

  // const addNewService = async (service) => {
  //   try {
  //     const response = await request("/api/v1.0/master/service", "PUT", null, {
  //       Authorization: `Bearer ${token}`,
  //     });
  //     if(response.status === 200) {
  //       alert("Услуга успешно добавлена.");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const updateService = async (service) => {
    try {
      // const response = await request("/api/v1.0/master/service", "PUT", null, {
      //   Authorization: `Bearer ${token}`,
      // });
      // if(response.status === 200) {
      //   alert("Услуга успешно обновлена.");
      // }
      const id = Object.values(service).find((ser) => ser.id === ser.service_id)
        .id;
      const serviceToSend = service[id];
      serviceToSend.sub_service_id = id;
      console.log(serviceToSend);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.groupWrap}>
      <div className={styles.catTitle}>{category.name}</div>
      {/* <div className={styles.searchWrap}>
        <span></span>
        <input type={"text"} placeholder={"Искать услугу"} />
      </div> */}
      <ul className={styles.servicesList}>
        {loading ? (
          <Preloader />
        ) : (
          <>
            <>
              {masterServices.map((service, key) => {
                if (
                  category.sub_services.filter(
                    (s) => parseInt(s.id) === service.sub_service_id
                  ).length !== 0
                ) {
                  return (
                    <ServiceBlock
                      theme={"prof"}
                      price={service.price}
                      key={key}
                      service={
                        category.sub_services.filter(
                          (s) => s.id === service.sub_service_id
                        )[0]
                      }
                      services={category.sub_services}
                      updateService={updateService}
                      setService={(service) => {
                        updateService(service);
                      }}
                    />
                  );
                }
              })}
            </>
            <>
              {category.sub_services.map((service, key) => {
                if (
                  masterServices.filter((s) => s.sub_service_id === service.id)
                    .length === 0
                )
                  return (
                    <ServiceBlock
                      theme={"prof"}
                      key={key}
                      service={service}
                      services={category.sub_services}
                      updateService={updateService}
                      setService={(service) => {
                        setMasterServices([...masterServices, service]);
                        //addNewService(service);
                      }}
                    />
                  );
              })}
            </>
          </>
        )}
      </ul>
    </div>
  );
};

export default ServicesGroup;
