import React from "react";

import Button from "../Button/Button";

import styles from "./MasterServiceItem.module.scss";

const MasterServiceItem = ({ service }) => {
  return (
    <li className={styles.MasterServiceItem}>
      <span className={styles.serviceName}>{service.name}</span>
      <span className={styles.serviceDuration}>{service.duration / 60} ч</span>
      <span className={styles.servicePrice}>{service.price} грн</span>
      <Button text={"Забронировать"} onClick={() => {}} />
    </li>
  );
};

export default MasterServiceItem;
