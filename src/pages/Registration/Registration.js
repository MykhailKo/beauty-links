import React, { useState } from "react";

import BaseReg from "./BaseReg/BaseReg";
import ChooseYourFighter from "./ChooseYourFighter/ChooseYourFighter";
import RegistrationFlow from "./RegistrationFlow/RegistrationFlow";

import styles from "./Registration.module.scss";

const Registration = () => {
  const [regStep, setRegStep] = useState(1);

  return (
    <main className={"container"}>
      <div className={styles.regWrap}>
        {regStep === 1 && <BaseReg nextStep={setRegStep} />}
        {regStep === 2 && <ChooseYourFighter nextStep={setRegStep} />}
        {regStep === 3 && <RegistrationFlow nextStep={setRegStep} />}
      </div>
    </main>
  );
};

export default Registration;
