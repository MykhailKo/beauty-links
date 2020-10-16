import React from "react";
import styles from "./btn.module.scss";

const Button = ({
  text,
  filled = true,
  onClick = () => true,
  disabled = false,
  type,
  loading,
}) => {
  return (
    <button
      type={type}
      className={
        disabled
          ? styles.disabledButton
          : loading
          ? styles.loadingButton
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
