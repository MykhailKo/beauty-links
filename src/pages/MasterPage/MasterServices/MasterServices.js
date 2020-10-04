import React from "react";

import MasterServiceItem from "../../../components/MasterServiceItem/MasterServiceItem";
import ShBox from "../../../components/ShBox/ShBox";

import styles from "./MasterServices.module.scss";

const MasterServices = ({ services }) => {
  return (
    <ShBox borderRadius={"0"} padding={"1.5em"}>
      <div className={styles.masterServicesWrap}>
        <div className={styles.title}>Услуги</div>
        <ul className={styles.masterServices}>
          {services.map((service, key) => {
            return <MasterServiceItem key={key} service={service} />;
          })}
        </ul>
      </div>
    </ShBox>
  );
};

export default MasterServices;
