import React from "react";

import ShBox from "../../components/ShBox/ShBox";

import styles from "./Registration.module.scss";
import ChooseYourFighter from "./ChooseYourFighter/ChooseYourFighter";

const Registration = () => {
  return (
    <main className={"container"}>
      <div className={styles.regWrap}>
        <ShBox>
          <h1>Registartion</h1>
        </ShBox>
        <ChooseYourFighter />
      </div>
    </main>
  );
};

export default Registration;
