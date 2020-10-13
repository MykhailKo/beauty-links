import React, { useState } from "react";

import styles from "./RegInput.module.scss";

const RegInput = ({
  theme = "reg",
  label,
  name,
  type = "text",
  required = false,
  disabled = false,
  minLength = 0,
  maxlength = 200,
  title = "",
  error = null,
  value,
  onChange,
  placeholder = "",
}) => {
  const [visible, setVisible] = useState(false);
  const [edit, setEdit] = useState(false);

  return (
    <div
      className={theme === "reg" ? styles.regInputWrap : styles.profInputWrap}
    >
      <label htmlFor={name} className={styles.inputLabel}>
        {label}
      </label>

      <input
        type={visible ? "text" : type}
        id={name}
        name={name}
        className={disabled ? styles.regDisabled : styles.regInput}
        minLength={minLength}
        maxLength={maxlength}
        title={title}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={theme === "prof" ? !edit : disabled}
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
      {theme === "prof" && (
        <div
          className={styles.edit}
          onClick={() => setEdit(!edit)}
          style={
            !edit
              ? {
                  backgroundImage: `url('/assets/img/icons/edit-disabled.png')`,
                }
              : { backgroundImage: `url('/assets/img/icons/edit-enabled.png')` }
          }
        ></div>
      )}
      {error && <span className={styles.inputError}>{error}</span>}
    </div>
  );
};

export default RegInput;
