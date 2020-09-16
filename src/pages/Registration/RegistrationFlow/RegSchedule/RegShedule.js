import React, { useState } from "react";

import TimeInput from "../../../../components/TimeInput/TimeInput";
import Switcher from "../../../../components/Switcher/Switcher";
import SecTitle from "../../../../components/SecTitle/SecTitle";
import SubTitle from "../../../../components/SubTitle/SubTitle";
import Button from "../../../../components/Button/Button";

import styles from "./RegSchedule.module.scss";

const days = [
  {
    name: "Понедельник",
    salonTime: { from: null, to: null },
    depTime: { from: null, to: null },
  },
  {
    name: "Вторник",
    salonTime: { from: null, to: null },
    depTime: { from: null, to: null },
  },
  {
    name: "Среда",
    salonTime: { from: null, to: null },
    depTime: { from: null, to: null },
  },
  {
    name: "Четверг",
    salonTime: { from: null, to: null },
    depTime: { from: null, to: null },
  },
  {
    name: "Пятница",
    salonTime: { from: null, to: null },
    depTime: { from: null, to: null },
  },
  {
    name: "Суббота",
    salonTime: { from: null, to: null },
    depTime: { from: null, to: null },
  },
  {
    name: "Воскресенье",
    salonTime: { from: null, to: null },
    depTime: { from: null, to: null },
  },
];

const RegSchedule = ({ nextStep }) => {
  // 1 - Салон, 2 - Выездные услуги
  const [scheduleType, setScheduleType] = useState(1);

  const daySates = [
    {
      salonState: useState(false),
      depState: useState(false),
    },
    {
      salonState: useState(false),
      depState: useState(false),
    },
    {
      salonState: useState(false),
      depState: useState(false),
    },
    {
      salonState: useState(false),
      depState: useState(false),
    },
    {
      salonState: useState(false),
      depState: useState(false),
    },
    {
      salonState: useState(false),
      depState: useState(false),
    },
    {
      salonState: useState(false),
      depState: useState(false),
    },
  ];

  const setTime = (day, scheduleType, timeType, value) => {
    if (scheduleType === 1 && timeType === "from") day.salonTime.from = value;
    else if (scheduleType === 1 && timeType === "to") day.salonTime.to = value;
    else if (scheduleType === 2 && timeType === "from")
      day.depTime.from = value;
    else if (scheduleType === 2 && timeType === "to") day.depTime.to = value;
    // console.log(day.salonTime);
    // console.log(day.depTime);
  };

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
          onClick={() => {
            setScheduleType(1);
            document.getElementById("scheduleForm").reset();
          }}
        >
          Салон
        </li>
        <li
          className={scheduleType !== 2 ? styles.typeDisabled : styles.type}
          onClick={() => {
            setScheduleType(2);
            document.getElementById("scheduleForm").reset();
          }}
        >
          Выездные услуги
        </li>
      </div>
      <form className={styles.scheduleDays} id={"scheduleForm"}>
        {days.map((day, key) => {
          return (
            <li
              className={styles.day}
              key={key}
              style={
                (scheduleType === 1 && !daySates[key].salonState[0]) ||
                (scheduleType === 2 && !daySates[key].depState[0])
                  ? { opacity: "0.5" }
                  : { opacity: "1" }
              }
            >
              <span className={styles.dayTitle}>{day.name}</span>
              <div className={styles.dayTime}>
                <TimeInput
                  label={"C"}
                  id={`${key + 1}from`}
                  value={
                    scheduleType === 1
                      ? daySates[key].salonState[0] && day.salonTime.from
                      : daySates[key].depState[0] && day.depTime.from
                  }
                  onChange={(event) =>
                    setTime(day, scheduleType, "from", event.target.value)
                  }
                  disabled={
                    (scheduleType === 1 && !daySates[key].salonState[0]) ||
                    (scheduleType === 2 && !daySates[key].depState[0])
                      ? true
                      : false
                  }
                />
                <div className={styles.inputSep}></div>
                <TimeInput
                  label={"До"}
                  id={`${key + 1}until`}
                  value={
                    scheduleType === 1
                      ? daySates[key].salonState[0] && day.salonTime.to
                      : daySates[key].depState[0] && day.depTime.to
                  }
                  onChange={(event) => {
                    if (event.target.value <= day.salonTime.from) {
                      return (event.target.style.borderColor = "#cb2026");
                    }
                    event.target.style.borderColor = "#c4c4c4";
                    setTime(day, scheduleType, "to", event.target.value);
                  }}
                  disabled={
                    (scheduleType === 1 && !daySates[key].salonState[0]) ||
                    (scheduleType === 2 && !daySates[key].depState[0])
                      ? true
                      : false
                  }
                />
              </div>
              <Switcher
                state={
                  scheduleType === 1
                    ? daySates[key].salonState[0]
                    : daySates[key].depState[0]
                }
                switchState={
                  scheduleType === 1
                    ? daySates[key].salonState[1]
                    : daySates[key].depState[1]
                }
                onClick={() => {
                  if (scheduleType === 1) {
                    day.salonTime.from = null;
                    day.salonTime.to = null;
                  } else if (scheduleType === 2) {
                    day.depTime.from = null;
                    day.depTime.to = null;
                  }
                }}
              />
            </li>
          );
        })}
      </form>
      <Button text={"Продолжить"} onClick={nextStep} />
    </div>
  );
};

export default RegSchedule;
