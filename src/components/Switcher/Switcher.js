import React from "react";

import styles from "./Switcher.module.scss";

const Switch = ({ state, switchState, onClick = () => true }) => {
  return (
    <div
      className={styles.switchBody}
      onClick={() => {
        onClick();
        switchState(!state);
      }}
      style={
        state
          ? { backgroundColor: "var(--main-blue)" }
          : { backgroundColor: "rgba(120, 120, 128, 0.16)" }
      }
    >
      <div
        className={styles.switcher}
        style={
          state
            ? { transform: "translateX(70%)" }
            : { transform: "translateX(0)" }
        }
      ></div>
    </div>
  );
};

export default Switch;
