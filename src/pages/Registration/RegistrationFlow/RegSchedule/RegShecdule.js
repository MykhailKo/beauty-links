import React, { useState } from "react";

import TimeInput from "../../../../components/TimeInput/TimeInput";
import Switcher from "../../../../components/Switcher/Switcher";
import SecTitle from "../../../../components/SecTitle/SecTitle";
import SubTitle from "../../../../components/SubTitle/SubTitle";
import Button from "../../../../components/Button/Button";

import styles from "./RegSchedule.module.scss";

const RegSchedule = ({ nextStep }) => {
  // 1 - Салон, 2 - Выездные услуги
  const [scheduleType, setScheduleType] = useState(1);

  const days = [
    { name: "Понедельник", state: useState(0) },
    { name: "Вторник", state: useState(0) },
    { name: "Среда", state: useState(0) },
    { name: "Четверг", state: useState(0) },
    { name: "Пятница", state: useState(0) },
    { name: "Суббота", state: useState(0) },
    { name: "Воскресенье", state: useState(0) },
  ];

  return (
    <div className={styles.scheduleWrap}>
      <SecTitle title={"Ваши рабочие часы"} />
      <SubTitle
        text={
          "Уточните время и дни, в которое вы готовы работать. Вы сможете изменить это позже."
        }
      />
      <div className={styles.scheduleTypes}>
        <li
          className={scheduleType !== 1 ? styles.typeDisabled : styles.type}
          onClick={() => setScheduleType(1)}
        >
          Салон
        </li>
        <li
          className={scheduleType !== 2 ? styles.typeDisabled : styles.type}
          onClick={() => setScheduleType(2)}
        >
          Выездные услуги
        </li>
      </div>
      <ul className={styles.scheduleDays}>
        {days.map((day, key) => {
          return (
            <li className={styles.day} key={key}>
              <span className={styles.dayTitle}>{day.name}</span>
              <div className={styles.dayTime}>
                <TimeInput label={"C"} id={`${key + 1}from`} />
                <div className={styles.inputSep}></div>
                <TimeInput label={"До"} id={`${key + 1}until`} />
              </div>
              <Switcher />
            </li>
          );
        })}
      </ul>
      <Button text={"Продолжить"} onClick={nextStep} />
    </div>
  );
};

export default RegSchedule;
