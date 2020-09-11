import React, { useState } from "react";

import Button from "../../../components/Button/Button";
import ShBox from "../../../components/ShBox/ShBox";

import styles from "./RegistrationFlow.module.scss";
import Stepper from "../../../components/Stepper/Stepper";

const RegistrationFlow = ({ nextStep }) => {
  const [step, setStep] = useState(1);

  return (
    <ShBox padding={"3em 3em"}>
      <Stepper step={step} />
      <div className={styles.stepperContent}></div>
      <Button
        text={"Продолжить"}
        onClick={() => {
          step < 6 ? setStep(step + 1) : nextStep(4);
        }}
      />
    </ShBox>
  );
};

export default RegistrationFlow;
