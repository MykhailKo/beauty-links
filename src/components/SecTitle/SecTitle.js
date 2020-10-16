import React from "react";

import styles from "./SecTitle.module.scss";

const SecTitle = ({ title, align = "center" }) => {
  return (
    <h2 className={styles.secTitle} style={{ textAlign: align }}>
      {title}
    </h2>
  );
};

export default SecTitle;
