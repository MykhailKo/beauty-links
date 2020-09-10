import React from "react";

import BaseReg from './BaseReg/BaseReg';

import styles from "./Registration.module.scss";

const Registration = () => {
  return (
    <main className={"container"}>
      <div className={styles.regWrap}>
        <BaseReg />
      </div>
    </main>
  );
};

export default Registration;
