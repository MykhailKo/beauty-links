import React from "react";

import styles from "./SubTitle.module.scss";

const SubTitle = ({ text }) => {
  return <h4 className={styles.SubTitle}>{text}</h4>;
};

export default SubTitle;
