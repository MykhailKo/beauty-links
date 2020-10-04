import React from "react";

import ShBox from "../../../components/ShBox/ShBox";

import styles from "./MasterCerts.module.scss";

const MasterCerts = ({ certs = [] }) => {
  return (
    <ShBox borderRadius={"0"} padding={"1em"}>
      <div className={styles.masterCertsWrap}>
        <div className={styles.title}>
          <span></span>Сертификаты
        </div>
        <ul className={styles.certsList}>
          {certs.map((cert, key) => {
            return (
              <li style={{ backgroundImage: `url(${cert})` }} key={key}></li>
            );
          })}
        </ul>
      </div>
    </ShBox>
  );
};

export default MasterCerts;
