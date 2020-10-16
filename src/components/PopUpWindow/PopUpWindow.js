import React from "react";

import ShBox from "../../components/ShBox/ShBox";

import styles from "./PopUpWindow.module.scss";

const PopUpWindow = ({
  opened,
  setOpened,
  size = "m",
  zIndex = 20,
  children,
}) => {
  return (
    <div
      className={styles.popUpBlock}
      style={
        opened
          ? { opacity: 1, left: 0, zIndex: zIndex }
          : { opacity: 0, left: "-100vw", zIndex: zIndex }
      }
    >
      <div className={styles.popUpBg}></div>
      <div
        className={styles.popUpWrap}
        style={size === "m" ? { width: "49em" } : { width: "58em" }}
      >
        <ShBox padding={"1em 1em 0 1em"}>
          <button
            className={styles.closePopUp}
            onClick={() => setOpened(false)}
          ></button>
          <div className={styles.popUpContentWrap}>{children}</div>
        </ShBox>
      </div>
    </div>
  );
};

export default PopUpWindow;
