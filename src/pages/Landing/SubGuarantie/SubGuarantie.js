import React from "react";

import styles from "./SubGuarantie.module.scss";

const SubGuarantie = (props) => {
  return (
    <div className={styles.SubGuarantie}>
      <div className={styles.image}>
        <img src={props.imgLink} alt={props.imgAlt} />
      </div>
      <div className={styles.title}>{props.title}</div>
    </div>
  );
};

export default SubGuarantie;
