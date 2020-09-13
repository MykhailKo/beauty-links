import React from "react";

import Button from "../../../../components/Button/Button";

import styles from "./RegKnowledgeData.module.scss";

const RegKnowledgeData = ({ KnowledgeData, setKnowledgeData, nextStep }) => {
  return (
    <div className={styles.RegKnowledgeData}>
      <Button onClick={nextStep} text={"Продолжить"} />
    </div>
  );
};

export default RegKnowledgeData;
