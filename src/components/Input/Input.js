import React from "react";
import styles from "./input.module.scss";

const Input = ({ placeholder, type = "text" }) => {
  return (
    <input placeholder={placeholder} type={type} className={styles.Input} />
  );
};

export default Input;
