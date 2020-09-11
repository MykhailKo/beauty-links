import React, { useState } from "react";

import Button from "../../../components/Button/Button";
import ShBox from "../../../components/ShBox/ShBox";
import Stepper from "../../../components/Stepper/Stepper";
import RegPersData from "./RegPersData/RegPersData";

import { validateForm } from "../../../components/validateForm";

import styles from "./RegistrationFlow.module.scss";

const RegistrationFlow = ({ nextStep }) => {
  const [step, setStep] = useState(1);

  return (
    <ShBox padding={"3em 3em"}>
      <Stepper step={step} />
      <div className={styles.stepperContent}>
        {step === 1 && <RegPersData step={step} nextStep={setStep} />}
      </div>
    </ShBox>
  );
};

export default RegistrationFlow;
