import React, { useState } from "react";

import Button from "../Button/Button";

import styles from "./ServiceBlock.module.scss";

const ServiceBlock = ({ service }) => {
  // 0 - not active, 1 - active, 2 - ready, 3 - edit
  const [serviceState, setServiceState] = useState(0);

  const [servicePrice, setServicePrice] = useState(null);

  return (
    <div className={styles.serviceBlock}>
      <div className={styles.serviceName}>
        {(serviceState === 2 || serviceState === 3) && (
          <span className={styles.check} />
        )}
        {service}
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
            }
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
                placeholder={"0"}
                id={"servicePrice"}
                value={servicePrice ? servicePrice : null}
                min={0}
              />
              грн
            </span>
          </div>
          <Button
            text={"Добавить услугу"}
            onClick={() => {
              setServicePrice(document.querySelector("#servicePrice").value);
              setServiceState(2);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ServiceBlock;
