import React from "react";

import TimeDisplay from "../../../components/TimeDisplay/TimeDisplay";
import ShBox from "../../../components/ShBox/ShBox";

import styles from "./MasterSchedule.module.scss";

const MasterSchedule = ({ schedule }) => {
  const days = {
    monday: "понедельник",
    tuesday: "вторник",
    wednesday: "среда",
    thursday: "четверг",
    friday: "пятница",
    saturday: "суббота",
    sunday: "воскресенье",
  };

  return (
    <ShBox padding={"1em 1.5em"} borderRadius={"0"}>
      <div className={styles.scheduleWrap}>
        <div className={styles.title}>
          <span></span>Время работы
        </div>
        <ul className={styles.schedule}>
          {Object.entries(schedule).map((day, key) => {
            if (day[1].length !== 0) {
              console.log(day[1]);
              return (
                <li key={key}>
                  <span className={styles.dayName}>{days[day[0]]}</span>
                  <div className={styles.times}>
                    <TimeDisplay time={day[1].available.from} />
                    <span className={styles.timeSep}></span>
                    <TimeDisplay time={day[1].available.to} />
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </ShBox>
  );
};

export default MasterSchedule;
