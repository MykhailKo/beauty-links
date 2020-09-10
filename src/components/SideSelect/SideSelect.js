import React from "react";
import Button from "../Button/Button";

import styles from "./SideSelect.module.scss";

const SideSelect = ({ imagePath, buttonText, buttonClick }) => {
  return (
    <div className={styles.SideSelect}>
      <div className={styles.imageBlock}>
        <img src={imagePath} alt="some-img" />
      </div>
      <Button text={buttonText} onClick={buttonClick} />
    </div>
  );
};

export default SideSelect;
