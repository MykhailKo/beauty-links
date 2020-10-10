import React, { useState, useEffect } from "react";

import Button from "../Button/Button";

import styles from "./ServiceBlock.module.scss";
import widths from "../../assets/scss/_widths.scss";

import useWindowSize from "../../hooks/useWindowSize";

const ServiceBlock = ({ service, services, setService }) => {
  const [serviceData, setServiceData] = useState([]);
  // 0 - not active, 1 - active, 2 - ready, 3 - edit
  const [serviceState, setServiceState] = useState(0);
  useEffect(() => {
    setServiceData(services[service.id]);
    setServiceState(serviceData ? 2 : 0);
  }, [service.id, serviceData, services]);

  const [servicePrice, setServicePrice] = useState(
    serviceData ? serviceData.price : ""
  );

  const [width] = useWindowSize();

  // const mobileOffset = width < parseInt(widths.break_sm) && serviceState === 2;

  return (
    <div
      className={styles.serviceBlock}
      style={
        width < parseInt(widths.break_sm) && serviceState === 2
          ? { marginBottom: "2.5em" }
          : { marginBottom: "1em" }
      }
      id={service.id}
    >
      <div className={styles.serviceName}>
        {(serviceState === 2 || serviceState === 3) && (
          <span className={styles.check} />
        )}
        {service.name}
      </div>
      <div className={styles.serviceControls}>
        <button
          className={
            serviceState === 0 ? styles.addService : styles.removeService
          }
          onClick={() => {
            if (serviceState === 0) setServiceState(1);
            else if (serviceState === 1) setServiceState(0);
            else if (serviceState === 2) {
              setServiceState(0);
              setServicePrice(null);
              const tempServices = { ...services };
              delete tempServices[service.id];
              setService(tempServices);
            } else if (serviceState === 3) setServiceState(2);
          }}
        />
        {(serviceState === 2 || serviceState === 3) && (
          <button
            className={styles.editService}
            onClick={() => setServiceState(3)}
          />
        )}
        {(serviceState === 2 || serviceState === 3) && (
          <span className={styles.serviceData}>
            Цена: {servicePrice} <b>грн/час</b>
          </span>
        )}
      </div>
      {(serviceState === 1 || serviceState === 3) && (
        <div className={styles.serviceEditBlock}>
          <div className={styles.priceBlock}>
            <span className={styles.priceTitle}>Цена</span>
            <span className={styles.priceInput}>
              <input
                type={"number"}
                min={0}
                placeholder={"0"}
                id={"servicePrice"}
                value={servicePrice ? servicePrice : ""}
                onChange={(event) => setServicePrice(event.target.value)}
                onKeyDown={(event) => {
                  if (event.keyCode === 189 || event.keyCode === 187)
                    event.preventDefault();
                }}
              />
              грн
            </span>
          </div>
          <Button
            text={"Добавить услугу"}
            onClick={() => {
              setServiceState(2);
              const editableServices = { ...services };
              delete editableServices[service.id];
              editableServices[service.id] = {
                price: servicePrice,
                duration: 60,
              };

              setService(editableServices);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ServiceBlock;
