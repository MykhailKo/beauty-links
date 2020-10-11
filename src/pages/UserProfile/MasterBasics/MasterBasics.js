import React from "react";

import ProfileTitle from "../../../components/ProfileTitle";

import styles from "./MasterBasics.module.scss";

const MasterBasics = () => {
  return (
    <div className={styles.basicsWrap}>
      <ProfileTitle title={"Основное"} />
    </div>
  );
};

export default MasterBasics;
