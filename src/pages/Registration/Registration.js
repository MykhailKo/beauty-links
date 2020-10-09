import React, { useState } from "react";

import BaseReg from "./BaseReg/BaseReg";
import ChooseYourFighter from "./ChooseYourFighter/ChooseYourFighter";
import RegistrationFlow from "./RegistrationFlow/RegistrationFlow";

import styles from "./Registration.module.scss";

const Registration = () => {
  const [regStep, setRegStep] = useState(3);

  const [regFullData, setRegFullData] = useState({
    BaseData: {
      email: "",
      password: "",
      password_confirmation: "",
      first_name: "",
      last_name: "",
      appointment_scheduling: "",
      user_role: "customer", //master/customer
      gender: "m",
      genderId: "gender2",
      how_you_find: "По рекомендации",
      phone: "",
      preferredCalendar: "Google Calendar",
    },
    ScheduleData: {
      mobile: {
        monday: { name: "Понедельник" },
        tuesday: { name: "Вторник" },
        wednesday: { name: "Среда" },
        thursday: { name: "Четверг" },
        friday: { name: "Пятница" },
        saturday: { name: "Суббота" },
        sunday: { name: "Воскресенье" },
      },
      salon: {
        monday: { name: "Понедельник" },
        tuesday: { name: "Вторник" },
        wednesday: { name: "Среда" },
        thursday: { name: "Четверг" },
        friday: { name: "Пятница" },
        saturday: { name: "Суббота" },
        sunday: { name: "Воскресенье" },
      },
    },
    ServiceData: {},
    LocationData: {
      mobile: false,
      salon: true,
      SalonName: "",
      SalonAddress: "",
    },
    KnowledgeData: {
      skills: "",
      experince: "",
      hasMedical: "",
      images: [],
    },
  });

  return (
    <main className={"container"}>
      <div className={styles.regWrap}>
        {regStep === 1 && (
          <BaseReg
            BaseData={regFullData.BaseData}
            setBaseData={(data) =>
              setRegFullData({ ...regFullData, BaseData: { ...data } })
            }
            nextStep={setRegStep}
          />
        )}
        {regStep === 2 && (
          <ChooseYourFighter
            setRole={(role) => {
              setRegFullData({
                ...regFullData,
                BaseData: { ...regFullData.BaseData, user_role: role },
              });
            }}
            nextStep={setRegStep}
          />
        )}
        {regStep === 3 && (
          <RegistrationFlow
            regFullData={regFullData}
            setRegFullData={setRegFullData}
            nextStep={setRegStep}
          />
        )}
        {/* <RegistrationFlow
          regFullData={regFullData}
          setRegFullData={setRegFullData}
          nextStep={setRegStep}
        /> */}
      </div>
    </main>
  );
};

export default Registration;
