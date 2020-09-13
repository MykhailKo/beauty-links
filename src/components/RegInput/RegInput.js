import React, { useState } from "react";

import styles from "./RegInput.module.scss";

const RegInput = ({
  label,
  name,
  type = "text",
  required = false,
  minLength = 0,
  maxlength = 200,
  pattern = ".*",
  title = "",
  error = null,
  value,
  onChange,
  placeholder = "",
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.inputWrap}>
      <label htmlFor={name} className={styles.inputLabel}>
        {label}
      </label>

      <input
        type={visible ? "text" : type}
        id={name}
        name={name}
        className={styles.regInput}
        minLength={minLength}
        maxLength={maxlength}
        pattern={pattern}
        title={title}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />

      {type === "password" && (
        <div
          className={styles.seePassword}
          onClick={() => setVisible(!visible)}
          style={
            !visible
              ? { backgroundImage: `url('/assets/img/icons/unvis.png')` }
              : { backgroundImage: `url('/assets/img/icons/vis.png')` }
          }
        ></div>
      )}
      {error && <span className={styles.inputError}>{error}</span>}
    </div>
  );
};

export default RegInput;
