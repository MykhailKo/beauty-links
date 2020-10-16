import React, { useState, useEffect, useContext, useCallback } from "react";
import ProfileTitle from "../../../components/ProfileTitle/ProfileTitle";
import Button from "../../../components/Button/Button";
import TimeInput from "../../../components/TimeInput/TimeInput";
import Switcher from "../../../components/Switcher/Switcher";
import Preloader from "../../../components/Preloader/Preloader";

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
  const { request, loading } = useHttp();

  const setFetchedData = (salon, mobile) => {
    if (salon !== null) {
      const preparedSalon = JSON.parse(JSON.stringify(workingHoursData.salon));
      for (const day in preparedSalon) {
        if (preparedSalon.hasOwnProperty(day)) {
          preparedSalon[day] = {
            ...preparedSalon[day],
            ...salon[day],
            active: salon[day]?.available ? true : false,
          };
        }
      }
      setWorkingHoursData({ ...workingHoursData, salon: preparedSalon });
    }
    if (mobile !== null) {
      const preparedMobile = JSON.parse(
        JSON.stringify(workingHoursData.mobile)
      );
      for (const day in preparedMobile) {
        if (preparedMobile.hasOwnProperty(day)) {
          preparedMobile[day] = {
            ...preparedMobile[day],
            ...mobile[day],
            active: mobile[day]?.available ? true : false,
          };
        }
      }
      setWorkingHoursData({ ...workingHoursData, mobile: preparedMobile });
    }
  };
  const fetchSchedule = useCallback(async () => {
    const response = await request(
      "/api/v1.0/profile/master/availability",
      "GET",
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    );
    const salon = response.salon ? Object.values(response.salon)[0] : null;
    const mobile = response.mobile ? Object.values(response.mobile)[0] : null;
    setFetchedData(salon, mobile);
  }, [request, token]);

  useEffect(() => {
    fetchSchedule();
  }, [fetchSchedule]);

  const prepareData = () => {
    const readyData = JSON.parse(JSON.stringify(workingHoursData));
    for (const key in readyData.salon) {
      if (readyData.salon.hasOwnProperty(key)) {
        if (!readyData.salon[key].active) {
          delete readyData.salon[key].available;
        }
        delete readyData.salon[key].name;
        delete readyData.salon[key].active;
      }
    }
    for (const key in readyData.mobile) {
      if (readyData.mobile.hasOwnProperty(key)) {
        if (!readyData.mobile[key].active) {
          delete readyData.mobile[key].available;
        }
        delete readyData.mobile[key].name;
        delete readyData.mobile[key].active;
      }
    }
    const result = {
      salon: { 13: readyData.salon },
      mobile: { ...readyData.mobile },
    };
    if (Object.values(result.mobile).length === 0) {
      delete result.mobile;
    }
    if (Object.values(result.salon).length === 0) {
      delete result.salon;
    }
    return result;
  };
  const updateSchedule = async () => {
    try {
      const readyData = prepareData();
      console.log(readyData);
      const response = await request(
        "/api/v1.0/profile/master/availability",
        "PUT",
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
      {loading ? (
        <Preloader />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default WorkingHoursPage;
