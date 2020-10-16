import React from "react";

import styles from "./Select.module.scss";

const Select = ({
  theme = "reg",
  filled = false,
  label,
  options,
  id,
  error = null,
  required = false,
  value,
  onChange,
}) => {
  return (
    <div className={styles.selectWrap}>
      {theme === "reg" && (
        <label htmlFor={id} className={styles.selectLabel}>
          {label}
        </label>
      )}

      <select
        id={id}
        name={id}
        className={
          theme === "reg"
            ? styles.selectReg
            : filled
            ? styles.filledCommon
            : styles.selectCommon
        }
        required={required}
        value={value}
        onChange={onChange}
      >
        {options.map((option, key) => {
          return <option key={key}>{option.text}</option>;
        })}
      </select>
      {error && <span className={styles.selectEerror}>{error}</span>}
    </div>
  );
};

export default Select;
