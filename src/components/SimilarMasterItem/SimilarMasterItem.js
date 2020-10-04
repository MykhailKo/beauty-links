import React from "react";

import styles from "./SimilarMasterItem.module.scss";

const SimilarMasterItem = ({ master }) => {
  return (
    <div className={styles.similarMasterWrap}>
      <div className={styles.shadedBg}></div>
      <div
        className={styles.similarMasterBlock}
        style={{ backgroundImage: `url(${master.img})` }}
      >
        <span className={styles.name}>{master.name}</span>
        <span className={styles.location}>
          <span></span>
          {master.location}
        </span>
      </div>
    </div>
  );
};

export default SimilarMasterItem;
