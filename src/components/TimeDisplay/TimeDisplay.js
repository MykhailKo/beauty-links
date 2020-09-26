import React from "react";

import styles from "./TimeDisplay.module.scss";

const TimeDisplay = ({ time }) => {
  return (
    <div className={styles.hours}>
      {time.split(":")[0]}
      <span className={styles.minutes}>{time.split(":")[1]}</span>
    </div>
  );
};

export default TimeDisplay;
