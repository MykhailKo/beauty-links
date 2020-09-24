import React from "react";
import styles from "./input.module.scss";

const Input = ({
  name,
  type = "text",
  required = false,
  disabled = false,
  minLength = 0,
  maxlength = 200,
  error = null,
  value,
  onChange,
  placeholder = "",
  filled = false,
}) => {
  return (
    <div className={styles.inputWrap}>
      <input
        placeholder={placeholder}
        type={type}
        id={name}
        name={name}
        minLength={minLength}
        maxLength={maxlength}
        required={required}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={filled ? styles.filledInput : styles.Input}
      />
      {error && <span className={styles.inputError}>{error}</span>}
    </div>
  );
};

export default Input;
