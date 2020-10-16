import React from "react";

import styles from "./Step.module.scss";
const Step = (props) => {
  return (
    <div className={styles.Step}>
      <div className={styles.Index}>
        <img
          src="/assets/img/brush-gold.png"
          className={styles.indexBackground}
          alt="background"
        />
        <div className={styles.indexText}>{props.number}</div>
      </div>
      <div className={styles.Description}>{props.text}</div>
    </div>
  );
};

export default Step;
