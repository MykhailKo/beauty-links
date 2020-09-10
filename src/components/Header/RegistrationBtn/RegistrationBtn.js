import React from "react";
import styles from "./reg.module.scss";

const Registration = (props) => {
  return (
    <button className={styles.regBtn} onClick={props.onClick}>
      Зарегистрироваться
    </button>
  );
};

export default Registration;
