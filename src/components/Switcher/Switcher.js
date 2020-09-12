import React from "react";

import styles from "./Switcher.module.scss";

const Switch = ({ state, switchState }) => {
  return (
    <div
      className={styles.switchBody}
      onClick={() => switchState(!state)}
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
