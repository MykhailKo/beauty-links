import React from "react";

import styles from "./TimeInput.module.scss";

const TimeInput = ({
  label,
  id,
  required = false,
  disabled,
  onChange,
  value,
}) => {
  return (
    <div className={styles.timeWrap}>
      <label htmlFor={id} className={styles.timeLabel}>
        {label}
      </label>
      <input
        value={value}
        type={"time"}
        id={id}
        name={id}
        className={styles.timeInput}
        required={required}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default TimeInput;
