import React, { useState } from "react";

import Button from "../../../components/Button/Button";
import ShBox from "../../../components/ShBox/ShBox";
import Stepper from "../../../components/Stepper/Stepper";
import RegPersData from "./RegPersData/RegPersData";
import RegLocationData from "./RegLocationData/RegLocationData";

import { validateForm } from "../../../components/validateForm";

import styles from "./RegistrationFlow.module.scss";

const RegistrationFlow = ({ nextStep }) => {
  const [step, setStep] = useState(1);
  const [regFullData, setRegFullData] = useState({
    exitService: false,
    workAtSalon: true,
  });
  return (
    <ShBox padding={"3em 3em"}>
      <Stepper step={step} />
      <div className={styles.stepperContent}>
        {step === 1 && <RegPersData step={step} nextStep={setStep} />}
        {step === 3 && (
          <RegLocationData
            regFullData={regFullData}
            setRegFullData={setRegFullData}
            nextStep={() => {
              step < 6 ? setStep(step + 1) : nextStep(4);
            }}
          />
        )}
      </div>
    </ShBox>
  );
};

export default RegistrationFlow;
