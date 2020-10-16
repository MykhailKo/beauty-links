import React from "react";

import styles from "./ShBox.module.scss";

const ShBox = (props) => {
  return (
    <div
      className={styles.shBox}
      style={{
        padding: props.padding,
        borderRadius: props.borderRadius || "0.7em",
      }}
    >
      {props.children}
    </div>
  );
};

export default ShBox;
