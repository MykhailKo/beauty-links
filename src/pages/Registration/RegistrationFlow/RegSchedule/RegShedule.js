import React, { useState } from "react";

import TimeInput from "../../../../components/TimeInput/TimeInput";
import Switcher from "../../../../components/Switcher/Switcher";
import SecTitle from "../../../../components/SecTitle/SecTitle";
import SubTitle from "../../../../components/SubTitle/SubTitle";
import Button from "../../../../components/Button/Button";

import styles from "./RegSchedule.module.scss";

const RegScheduleDay = ({ day, setDay, scheduleType }) => {
  const setActive = (active) => {
    day[scheduleType].active = active;
    setDay(day);
  };

  return (
    <li
      className={styles.day}
      style={!day[scheduleType].active ? { opacity: "0.5" } : { opacity: "1" }}
    >
      <span className={styles.dayTitle}>{day.name}</span>
      <div className={styles.dayTime}>
        <TimeInput
          label={"C"}
          id={`${day.id}from`}
          value={day[scheduleType].from}
          onChange={(event) => {
            day[scheduleType].from = event.target.value;
            setDay(day);
          }}
          disabled={!day[scheduleType].active ? true : false}
        />
        <div className={styles.inputSep}></div>
        <TimeInput
          label={"До"}
          id={`${day.id}until`}
          value={day[scheduleType].to}
          onChange={(event) => {
            console.log(event.target.value);
            if (event.target.value <= day[scheduleType].from) {
              return (event.target.style.borderColor = "#cb2026");
            }
            event.target.style.borderColor = "#c4c4c4";
            day[scheduleType].to = event.target.value;
            setDay(day);
          }}
          disabled={!day[scheduleType].active ? true : false}
        />
      </div>
      <Switcher
        state={day[scheduleType].active}
        switchState={setActive}
        onClick={() => {
          day[scheduleType].from = null;
          day[scheduleType].to = null;
          setDay(day);
        }}
      />
    </li>
  );
};

const RegSchedule = ({ nextStep }) => {
  // 1 - Салон, 2 - Выездные услуги
  const [scheduleType, setScheduleType] = useState(1);

  const schedule = scheduleType === 1 ? "salonTime" : "depTime";

  const [days, setDays] = useState({
    mon: {
      id: "mon",
      name: "Понедельник",
      salonTime: { from: null, to: null, active: false },
      depTime: { from: null, to: null, active: false },
    },
    tue: {
      id: "tue",
      name: "Вторник",
      salonTime: { from: null, to: null, active: false },
      depTime: { from: null, to: null, active: false },
    },
    wed: {
      id: "wed",
      name: "Среда",
      salonTime: { from: null, to: null, active: false },
      depTime: { from: null, to: null, active: false },
    },
    thu: {
      id: "thu",
      name: "Четверг",
      salonTime: { from: null, to: null, active: false },
      depTime: { from: null, to: null, active: false },
    },
    fri: {
      id: "fri",
      name: "Пятница",
      salonTime: { from: null, to: null, active: false },
      depTime: { from: null, to: null, active: false },
    },
    sat: {
      id: "sat",
      name: "Суббота",
      salonTime: { from: null, to: null, active: false },
      depTime: { from: null, to: null, active: false },
    },
    sun: {
      id: "sun",
      name: "Воскресенье",
      salonTime: { from: null, to: null, active: false },
      depTime: { from: null, to: null, active: false },
    },
  });

  const [update, setUpdate] = useState(0);

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
        {Object.entries(days).map((day, key) => {
          const dayKey = day[0];
          return (
            <RegScheduleDay
              key={key}
              day={day[1]}
              scheduleType={schedule}
              setDay={(day) => {
                days[dayKey] = day;
                setDays(days);
                setUpdate(update + 1);
                console.log(days);
              }}
            />
          );
        })}
      </form>
      <Button text={"Продолжить"} onClick={nextStep} />
    </div>
  );
};

export default RegSchedule;
