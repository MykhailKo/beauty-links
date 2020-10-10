import React, { useContext, useState } from "react";

import TimeInput from "../../../../components/TimeInput/TimeInput";
import Switcher from "../../../../components/Switcher/Switcher";
import SecTitle from "../../../../components/SecTitle/SecTitle";
import SubTitle from "../../../../components/SubTitle/SubTitle";
import Button from "../../../../components/Button/Button";
import authContext from "../../../../context/auth.context";
import { useHttp } from "../../../../hooks/useHttp";

import styles from "./RegSchedule.module.scss";

const RegScheduleDay = ({ day, setDay, scheduleType, setDisableNext }) => {
  const setActive = (active) => {
    day.active = active;
    day.available = {};
    setDay(day);
  };

  return (
    <li
      className={styles.day}
      style={!day.active ? { opacity: "0.5" } : { opacity: "1" }}
    >
      <span className={styles.dayTitle}>{day.name}</span>
      <div className={styles.dayTime}>
        <TimeInput
          label={"C"}
          id={`${day.id}_from`}
          value={day?.available?.from || ""}
          onChange={(event) => {
            const dayUpdate = { ...day };
            dayUpdate.available.from = event.target.value;
            setDay(dayUpdate);
          }}
          disabled={!day.active ? true : false}
        />
        <div className={styles.inputSep}></div>
        <TimeInput
          label={"До"}
          id={`${day.id}_until`}
          value={day?.available?.to || ""}
          onChange={(event) => {
            if (event.target.value <= day?.available?.from) {
              day.available.to = event.target.value;
              event.target.style.borderColor = "#cb2026";
              return setDisableNext(true);
            }
            setDisableNext(false);
            event.target.style.borderColor = "#c4c4c4";
            day.available.to = event.target.value;
            setDay(day);
          }}
          disabled={!day.active ? true : false}
        />
      </div>
      <Switcher
        state={day.active}
        switchState={setActive}
        onClick={() => {
          const emptyDay = { name: day.name };
          setDay(emptyDay);
        }}
      />
    </li>
  );
};

const RegSchedule = ({ nextStep, ScheduleData, setScheduleData }) => {
  const { loading, request } = useHttp();
  const [scheduleType, setScheduleType] = useState("salon");
  const [disableNext, setDisableNext] = useState(false);
  const { token } = useContext(authContext);
  const prepareData = () => {
    const readyData = JSON.parse(JSON.stringify(ScheduleData));
    for (const key in readyData.salon) {
      if (readyData.salon.hasOwnProperty(key)) {
        delete readyData.salon[key].name;
        delete readyData.salon[key].active;
      }
    }
    for (const key in readyData.mobile) {
      if (readyData.mobile.hasOwnProperty(key)) {
        delete readyData.mobile[key].name;
        delete readyData.mobile[key].active;
      }
    }
    const result = { 1: { 13: readyData.salon }, 2: { 13: readyData.mobile } };
    if (Object.values(result[2]).length === 0) {
      delete result[2];
    }
    if (Object.values(result[1]).length === 0) {
      delete result[1];
    }
    return result;
  };
  const updateSchedule = async () => {
    try {
      const readyData = prepareData();
      const response = await request(
        "/api/v1.0/master/availability",
        "POST",
        readyData,
        { Authorization: `Bearer ${token}` }
      );
      if (response.status === 200) {
        nextStep();
      }
    } catch (error) {
      console.log(error);
      alert("Что-то пошло не так, повторите запрос или попробуйте позже.");
    }
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
          className={
            scheduleType !== "salon" ? styles.typeDisabled : styles.type
          }
          onClick={() => {
            setScheduleType("salon");
          }}
        >
          Салон
        </li>
        <li
          className={
            scheduleType !== "mobile" ? styles.typeDisabled : styles.type
          }
          onClick={() => {
            setScheduleType("mobile");
          }}
        >
          Выездные услуги
        </li>
      </div>
      <form className={styles.scheduleDays} id={"scheduleForm"}>
        {Object.entries(ScheduleData[scheduleType]).map((dayArray, key) => {
          return (
            <RegScheduleDay
              key={key}
              day={dayArray[1]}
              scheduleType={scheduleType}
              setDay={(day) => {
                ScheduleData[scheduleType][dayArray[0]] = day;
                setScheduleData(ScheduleData);
              }}
              setDisableNext={setDisableNext}
            />
          );
        })}
      </form>
      <Button
        text={"Продолжить"}
        onClick={updateSchedule}
        disabled={disableNext}
        loading={loading}
      />
    </div>
  );
};

export default RegSchedule;
