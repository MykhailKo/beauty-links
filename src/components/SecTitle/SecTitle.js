import React from "react";

import styles from "./SecTitle.module.scss";

const SecTitle = ({ title }) => {
  return <h2 className={styles.secTitle}>{title}</h2>;
};

export default SecTitle;
