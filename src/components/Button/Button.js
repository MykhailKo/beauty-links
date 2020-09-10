import React from "react";
import styles from "./btn.module.scss";

const Button = ({ text, filled = true, onClick = () => true }) => {
  return (
    <button
      className={filled ? styles.filledButton : styles.plainButton}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
