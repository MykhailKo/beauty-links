import React, {useState} from "react";

import BaseReg from './BaseReg/BaseReg';

import styles from "./Registration.module.scss";
import ChooseYourFighter from "./ChooseYourFighter/ChooseYourFighter";

const Registration = () => {

  const [regStep, setRegStep] = useState(1);

  return (
    <main className={"container"}>
      <div className={styles.regWrap}>
        {regStep === 1 && <BaseReg nextStep={setRegStep} />}
        {regStep === 2 && <ChooseYourFighter nextStep={setRegStep} />}
      </div>
    </main>
  );
};

export default Registration;
