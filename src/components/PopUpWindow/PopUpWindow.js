import React from "react";

import ShBox from "../../components/ShBox/ShBox";

import styles from "./PopUpWindow.module.scss";

const PopUpWindow = ({ opened, setOpened, children }) => {
  return (
    <div
      className={styles.popUpBlock}
      style={opened ? { opacity: 1, left: 0 } : { opacity: 0, left: "-100vw" }}
    >
      <div className={styles.popUpBg}></div>
      <div className={styles.popUpWrap}>
        <ShBox padding={"1em"}>
          <button
            className={styles.closePopUp}
            onClick={() => setOpened(!opened)}
          ></button>
          <div className={styles.popUpContentWrap}>{children}</div>
        </ShBox>
      </div>
    </div>
  );
};

export default PopUpWindow;
