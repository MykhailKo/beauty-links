import React, { useState } from "react";

import ShBox from "../../../components/ShBox/ShBox";
import Stepper from "../../../components/Stepper/Stepper";
import RegPersData from "./RegPersData/RegPersData";
import RegServiceData from "./RegServicesData/RegServiceData";
import RegLocationData from "./RegLocationData/RegLocationData";
import RegKnowledgeData from "./RegKnowledgeData/RegKnowledgeData";
import RegSchedule from "./RegSchedule/RegShedule";
import Fatality from "../Fatality/Fatality";

import { validateForm } from "../../../components/validateForm";
import useWindowSize from "../../../hooks/useWindowSize";

import styles from "./RegistrationFlow.module.scss";
import widths from "../../../assets/scss/_widths.scss";

const RegistrationFlow = ({ regFullData, setRegFullData, nextStep }) => {
  const [step, setStep] = useState(1);

  const GoToNextStep = () => {
    step < 6 ? setStep(step + 1) : nextStep(4);
  };

  const [width] = useWindowSize();

  return (
    <ShBox padding={width < parseInt(widths.break_md) ? "0.5em" : "3em 3em"}>
      <Stepper step={step} />
      <div className={styles.stepperContent}>
        {step === 1 && (
          <RegPersData
            PersData={regFullData.PersData}
            setPersData={(PersData) => {
              setRegFullData({ ...regFullData, PersData });
            }}
            nextStep={GoToNextStep}
          />
        )}
        {step === 2 && <RegServiceData nextStep={GoToNextStep} />}
        {step === 3 && (
          <RegLocationData
            LocationData={regFullData.LocationData}
            setLocationData={(LocationData) => {
              setRegFullData({ ...regFullData, LocationData });
            }}
            nextStep={GoToNextStep}
          />
        )}
        {step === 4 && <RegSchedule nextStep={GoToNextStep} />}
        {step === 5 && (
          <RegKnowledgeData
            KnowledgeData={regFullData.KnowledgeData}
            setKnowledgeData={(KnowledgeData) => {
              setRegFullData({ ...regFullData, KnowledgeData });
            }}
            nextStep={GoToNextStep}
          />
        )}
        {step === 6 && (
          <Fatality
            avatar={regFullData.avatar}
            setAvatar={(avatar) => {
              setRegFullData({ ...regFullData, avatar });
            }}
            nextStep={GoToNextStep}
          />
        )}
      </div>
    </ShBox>
  );
};

export default RegistrationFlow;
