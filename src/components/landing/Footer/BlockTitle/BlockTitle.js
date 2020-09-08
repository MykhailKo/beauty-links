import React from "react";

import styles from "./BlockTitle.module.scss";

const BlockTitle = (props) => {
  return <div className={styles.BlockTitle}>{props.text}</div>;
};

export default BlockTitle;
