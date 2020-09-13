import React from "react";

import SubTitle from "../../../../components/SubTitle/SubTitle";

import styles from "./AddImages.module.scss";

const AddImages = () => {
  return (
    <div className={styles.AddImages}>
      <SubTitle text={"Загрузите до 10 изображений в своё портфолио"} />
      <div className={styles.dropArea}>
        <span>Добавить фотографию</span>
        <span>+</span>
      </div>
    </div>
  );
};

export default AddImages;
