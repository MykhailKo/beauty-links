import React from "react";

import Button from "../../../../components/Button/Button";
import SecTitle from "../../../../components/SecTitle/SecTitle";
import styles from "./RegKnowledgeData.module.scss";

const RegKnowledgeData = ({ KnowledgeData, setKnowledgeData, nextStep }) => {
  return (
    <div className={styles.RegKnowledgeData}>
      <SecTitle title={"Опыт и навыки"} />
      <Button onClick={nextStep} text={"Завершить регистрацию"} />
    </div>
  );
};

export default RegKnowledgeData;
