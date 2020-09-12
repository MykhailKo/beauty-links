import React, { useState } from "react";

import ShBox from "../../../components/ShBox/ShBox";
import Stepper from "../../../components/Stepper/Stepper";
import RegPersData from "./RegPersData/RegPersData";
import RegServiceData from "./RegServicesData/RegServiceData";
import RegLocationData from "./RegLocationData/RegLocationData";

import { validateForm } from "../../../components/validateForm";

import styles from "./RegistrationFlow.module.scss";

const RegistrationFlow = ({ nextStep }) => {
  const [step, setStep] = useState(3);
  const [regFullData, setRegFullData] = useState({
    PersData: {
      name: "",
      surname: "",
      mobilePhone: "",
      sex: "",
      preferredCalendar: "",
    },
    ServiceData: {},
    LocationData: {
      exitService: false,
      workAtSalon: true,
      SalonName: "",
      SalonAddress: "",
    },
  });
  return (
    <ShBox padding={"3em 3em"}>
      <Stepper step={step} />
      <div className={styles.stepperContent}>
        {step === 1 && <RegPersData step={step} nextStep={setStep} />}
        {step === 2 && <RegServiceData step={step} nextStep={setStep} />}
        {step === 3 && (
          <RegLocationData
            LocationData={regFullData.LocationData}
            setLocationData={(data) => {
              setRegFullData({ ...regFullData, LocationData: data });
            }}
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
