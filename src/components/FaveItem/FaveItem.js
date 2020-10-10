import React from "react";

import Button from "../Button/Button";
import Stars from "../Stars/Stars";
import MasterServiceItem from "../../components/MasterServiceItem/MasterServiceItem";

import styles from "./FaveItem.module.scss";

const FaveItem = ({ masterData }) => {
  return (
    <li className={styles.FaveItem}>
      <div className={styles.faveImg}></div>
      <div className={styles.faveContent}>
        <div className={styles.masterData}>
          <div
            className={styles.avatar}
            style={
              masterData.avatar !== ""
                ? { backgroundImage: `url(${masterData.avatar})` }
                : {
                    backgroundImage: `url(/assets/img/dummyAvatar.png)`,
                  }
            }
          ></div>
          <strong className={styles.name}>{masterData.name}</strong>
          <div className={styles.rate}>
            <Stars rate={masterData.rate} />
          </div>
          <div className={styles.address}>
            <span></span>
            {masterData.salonAddress}
          </div>
          <button className={styles.deleteFave}></button>
        </div>
        <ul className={styles.masterServices}>
          {masterData.servives.map((service, key) => {
            return <MasterServiceItem service={service} key={key} />;
          })}
        </ul>
        <a href="" className={styles.masterLink}>
          Перейти в профиль мастера <span>&#10095;</span>
        </a>
      </div>
    </li>
  );
};

export default FaveItem;
