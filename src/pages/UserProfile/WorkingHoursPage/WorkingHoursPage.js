import React, { useState, useEffect, useContext } from "react";
import ProfileTitle from "../../../components/ProfileTitle/ProfileTitle";
import Button from "../../../components/Button/Button";
import TimeInput from "../../../components/TimeInput/TimeInput";
import Switcher from "../../../components/Switcher/Switcher";

import { useHttp } from "../../../hooks/useHttp";
import authContext from "../../../context/auth.context";
import styles from "./WorkingHoursPage.module.scss";

const ScheduleDay = ({ day, setDay, scheduleType, setDisableSubmit }) => {
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
            event.target.style.borderColor = "#c4c4c4";
            day.available.to = event.target.value;
            if (event.target.value <= day?.available?.from) {
              event.target.style.borderColor = "#cb2026";
            }
            setDisableSubmit(event.target.value <= day?.available?.from);
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

const WorkingHoursPage = () => {
  const [update, triggerUpdate] = useState(0);
  const [workingHoursData, setWorkingHoursData] = useState({
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
  });
  const [scheduleType, setScheduleType] = useState("salon");
  const [disableSubmit, setDisableSubmit] = useState(false);
  const { token } = useContext(authContext);
  const { request } = useHttp();

  const prepareData = () => {
    const readyData = JSON.parse(JSON.stringify(workingHoursData));
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
        alert("Рассписание было успешно обновлено!");
      }
    } catch (error) {
      console.log(error);
      alert("Что-то пошло не так, повторите запрос или попробуйте позже.");
    }
  };

  return (
    <div>
      <ProfileTitle
        title={"Рабочие часы"}
        subTitle={
          "Здесь вы можете  контролировать своё время  и вносить изменения в свой рабочий график."
        }
      />
      <div className={styles.scheduleWrap}>
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
          {Object.entries(workingHoursData[scheduleType]).map(
            (dayArray, key) => {
              return (
                <ScheduleDay
                  key={key}
                  day={dayArray[1]}
                  scheduleType={scheduleType}
                  setDay={(day) => {
                    workingHoursData[scheduleType][dayArray[0]] = day;
                    setWorkingHoursData(workingHoursData);
                    triggerUpdate(update + 1);
                  }}
                  setDisableSubmit={setDisableSubmit}
                />
              );
            }
          )}
        </form>
      </div>
      <Button
        text={"Обновить рассписание"}
        onClick={() => updateSchedule()}
        disabled={disableSubmit}
      />
    </div>
  );
};

export default WorkingHoursPage;
