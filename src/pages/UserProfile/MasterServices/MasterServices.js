import React, { useState, useEffect, useContext, useCallback } from "react";

import ProfileTitle from "../../../components/ProfileTitle/ProfileTitle";
import ServicesGroup from "./ServicesGroup/ServicesGroup";

import { useHttp } from "../../../hooks/useHttp";
import authContext from "../../../context/auth.context";
import styles from "./MasterServices.module.scss";

import services from "./services.json";

const MasterServices = () => {
  const { loading, request } = useHttp();
  const [serviceCats, setServiceCats] = useState(services);
  const [masterServices, setMsterServices] = useState([
    {
      sub_service_id: 17,
      price: "500.00",
      duration: "60",
    },
    {
      sub_service_id: 18,
      price: "300.00",
      duration: "60",
    },
  ]);
  const { token } = useContext(authContext);

  // const fetchMasterServices = useCallback(async () => {
  //   try {
  //     const services = await request("/api/v1.0/services", "GET", null, {
  //        Authorization: `Bearer ${token}`,
  //     });
  //     if (services.status === 200) {
  //       delete services.status;
  //       const result = Object.values(services);
  //       setMasterService(result);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [request]);

  // const fetchAllServices = useCallback(async () => {
  //   try {
  //     const services = await request("/api/v1.0/services", "GET", null, {
  //       Authorization: `Bearer ${token}`,
  //     });
  //     if (services.status === 200) {
  //       delete services.status;
  //       const result = Object.values(services);
  //       setServiceCats(result);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [request]);

  return (
    <div className={styles.servicesWrap}>
      <ProfileTitle
        title={"Услуги"}
        subTitle={"Все услуги, которые есть на сайте, отображаются здесь."}
      />
      {serviceCats.map((category, key) => {
        return (
          <ServicesGroup
            key={key}
            category={category}
            masterServices={masterServices}
            setMsterServices={setMsterServices}
          />
        );
      })}
    </div>
  );
};

export default MasterServices;
