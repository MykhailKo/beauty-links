import React, { useState, useEffect, useContext, useCallback } from "react";

import ProfileTitle from "../../../components/ProfileTitle/ProfileTitle";
import ServicesGroup from "./ServicesGroup/ServicesGroup";
import Preloader from "../../../components/Preloader/Preloader";

import { useHttp } from "../../../hooks/useHttp";
import authContext from "../../../context/auth.context";
import styles from "./MasterServices.module.scss";

const MasterServices = () => {
  const { request, loading } = useHttp();
  const [serviceCats, setServiceCats] = useState([]);
  const [masterServices, setMasterServices] = useState([]);
  const { token } = useContext(authContext);

  const fetchMasterServices = useCallback(async () => {
    try {
      const services = await request(
        "/api/v1.0/profile/master/services",
        "GET",
        null,
        {
          Authorization: `Bearer ${token}`,
        }
      );
      if (services.status === 200) {
        delete services.status;
        const result = Object.values(services);
        setMasterServices(result);
      }
    } catch (error) {
      console.log(error);
    }
  }, [request, token]);

  const fetchAllServices = useCallback(async () => {
    try {
      const services = await request("/api/v1.0/services", "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      if (services.status === 200) {
        delete services.status;
        const result = Object.values(services);
        setServiceCats(result);
      }
    } catch (error) {
      console.log(error);
    }
  }, [request, token]);

  useEffect(() => {
    fetchMasterServices();
  }, [fetchMasterServices]);

  useEffect(() => {
    fetchAllServices();
  }, [fetchAllServices]);

  return (
    <div className={styles.servicesWrap}>
      <ProfileTitle
        title={"Услуги"}
        subTitle={"Все услуги, которые есть на сайте, отображаются здесь."}
      />
      {loading ? (
        <Preloader />
      ) : (
        serviceCats.map((category, key) => {
          return (
            <ServicesGroup
              key={key}
              category={category}
              masterServices={masterServices}
              setMasterServices={setMasterServices}
            />
          );
        })
      )}
    </div>
  );
};

export default MasterServices;
