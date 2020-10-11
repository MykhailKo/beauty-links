import React from "react";

import styles from "./MasterBasicAction.module.scss";

const MasterBasicAction = ({ name, completed }) => {
  return (
    <div className={styles.actionWrap}>
      <p className={styles.actionName}>{name}</p>
      <div
        className={
          completed ? styles.actionCompleted : styles.actionUncompleted
        }
      />
    </div>
  );
};

export default MasterBasicAction;
