import React from "react";
import styles from "./btn.module.scss";

const Button = ({ text, filled = true }) => {
  return (
    <button className={filled ? styles.filledButton : styles.plainButtton}>
      {text}
    </button>
  );
};

export default Button;
