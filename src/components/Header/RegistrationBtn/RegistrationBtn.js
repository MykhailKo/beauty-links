import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./reg.module.scss";

const Registration = (props) => {
  const history = useHistory();
  return (
    <div className={styles.regWrap}>
    <button className={styles.regBtn} onClick={() => history.push("/register")}>
      Регистрация
    </button>
    <button className={styles.regBtn} onClick={() => history.push("/login")}>
      Вход
    </button>
    </div>
  );
};

export default Registration;
