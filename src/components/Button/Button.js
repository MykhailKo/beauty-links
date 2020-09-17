import React from "react";
import styles from "./btn.module.scss";

const Button = ({
  text,
  filled = true,
  onClick = () => true,
  disabled = false,
}) => {
  return (
    <button
      className={
        disabled
          ? styles.disabledButton
          : filled
          ? styles.filledButton
          : styles.plainButton
      }
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
