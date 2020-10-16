import React from "react";

import Button from "../Button/Button";

import styles from "./MasterServiceItem.module.scss";

const MasterServiceItem = ({ service, book, master }) => {
  service.master = master;
  return (
    <li className={styles.MasterServiceItem}>
      <span className={styles.serviceName}>{service.name}</span>
      <span className={styles.serviceDuration}>
        {Math.floor((service.duration / 60) * 10) / 10} ч
      </span>
      <span className={styles.servicePrice}>{service.price} грн</span>
      <Button text={"Забронировать"} onClick={() => book(service)} />
    </li>
  );
};

export default MasterServiceItem;
