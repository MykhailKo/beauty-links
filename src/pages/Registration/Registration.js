import React from "react";

import BaseReg from './BaseReg/BaseReg';

import styles from "./Registration.module.scss";
import ChooseYourFighter from "./ChooseYourFighter/ChooseYourFighter";

const Registration = () => {
  return (
    <main className={"container"}>
      <div className={styles.regWrap}>
        <BaseReg />
        <ChooseYourFighter />
      </div>
    </main>
  );
};

export default Registration;
