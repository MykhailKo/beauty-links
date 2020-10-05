import React, { useCallback, useEffect, useState } from "react";

import MasterServiceItem from "../../../components/MasterServiceItem/MasterServiceItem";
import Preloader from "../../../components/Preloader/Preloader";
import ShBox from "../../../components/ShBox/ShBox";
import { useHttp } from "../../../hooks/useHttp";

import styles from "./MasterServices.module.scss";

const MasterServices = ({ masterId }) => {
  const [services, setServices] = useState([]);
  const { request, loading } = useHttp();
  const fetchServices = useCallback(async () => {
    try {
      const response = await request(
        `/api/v1.0/master/${masterId}/services`,
        "GET",
        null,
        {}
      );
      if (response.status === 200) {
        setServices(response.sub_services);
      }
    } catch (error) {
      console.log(error);
    }
  }, [masterId, request]);
  useEffect(() => {
    fetchServices();
  }, [fetchServices]);
  return (
    <ShBox borderRadius={"0"} padding={"1.5em"}>
      {loading ? (
        <Preloader />
      ) : (
        <div className={styles.masterServicesWrap}>
          <div className={styles.title}>Услуги</div>
          <ul className={styles.masterServices}>
            {services.map((service, key) => {
              return <MasterServiceItem key={key} service={service} />;
            })}
          </ul>
        </div>
      )}
    </ShBox>
  );
};

export default MasterServices;
