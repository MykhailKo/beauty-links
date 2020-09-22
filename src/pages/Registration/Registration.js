import React, { useState } from "react";

import BaseReg from "./BaseReg/BaseReg";
import ChooseYourFighter from "./ChooseYourFighter/ChooseYourFighter";
import RegistrationFlow from "./RegistrationFlow/RegistrationFlow";

import styles from "./Registration.module.scss";

const Registration = () => {
  const [regStep, setRegStep] = useState(1);

  const [profileType, setProfileType] = useState(); // 1 - master, 2 - client
  const [regFullData, setRegFullData] = useState({
    BaseData: {
      email: "",
      password: "",
      password_confirmation: "",
      first_name: "",
      last_name: "",
      appointment_scheduling: "",
      user_role: "", //master/customer
      gender: "m",
      how_you_find: "goe",
      phone: "9319332",
    },
    PersData: {
      name: "",
      surname: "",
      mobilePhone: "",
      gender: "gender3",
      preferredCalendar: "Google Calendar",
      howYouKnow: "По рекомендации",
    },
    ScheduleData: {
      mon: {
        id: "mon",
        name: "Понедельник",
        salonTime: { from: "", to: "", active: false },
        depTime: { from: "", to: "", active: false },
      },
      tue: {
        id: "tue",
        name: "Вторник",
        salonTime: { from: "", to: "", active: false },
        depTime: { from: "", to: "", active: false },
      },
      wed: {
        id: "wed",
        name: "Среда",
        salonTime: { from: "", to: "", active: false },
        depTime: { from: "", to: "", active: false },
      },
      thu: {
        id: "thu",
        name: "Четверг",
        salonTime: { from: "", to: "", active: false },
        depTime: { from: "", to: "", active: false },
      },
      fri: {
        id: "fri",
        name: "Пятница",
        salonTime: { from: "", to: "", active: false },
        depTime: { from: "", to: "", active: false },
      },
      sat: {
        id: "sat",
        name: "Суббота",
        salonTime: { from: "", to: "", active: false },
        depTime: { from: "", to: "", active: false },
      },
      sun: {
        id: "sun",
        name: "Воскресенье",
        salonTime: { from: "", to: "", active: false },
        depTime: { from: "", to: "", active: false },
      },
    },
    ServiceData: { currentCat: "cosm", services: [] },
    LocationData: {
      exitService: false,
      workAtSalon: true,
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
            nextStep={setRegStep}
            setProfileType={setProfileType}
          />
        )}
        {regStep === 3 && profileType === 1 && (
          <RegistrationFlow
            regFullData={regFullData}
            setRegFullData={setRegFullData}
            nextStep={setRegStep}
          />
        )}
        <RegistrationFlow
          regFullData={regFullData}
          setRegFullData={setRegFullData}
          nextStep={setRegStep}
        />
      </div>
    </main>
  );
};

export default Registration;
