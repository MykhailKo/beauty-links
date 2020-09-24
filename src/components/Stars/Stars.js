import React from "react";

import styles from "./Stars.module.scss";

const Stars = ({ rate }) => {
  return (
    <div className={styles.starsWrap}>
      <div
        className={styles.filling}
        style={{ width: `${(rate / 5) * 100}%` }}
      ></div>
      <div className={styles.stars}></div>
    </div>
  );
};

export default Stars;
