import React from "react";

import styles from "./Preloader.module.scss";

const Preloader = ({ height }) => {
  return (
    <div className={styles.preloaderWrap} style={{ height: height }}>
      <div className={styles.preloader}></div>
    </div>
  );
};

export default Preloader;
