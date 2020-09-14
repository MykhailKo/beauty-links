import React from "react";

import SubTitle from "../../../../components/SubTitle/SubTitle";

import styles from "./AddImages.module.scss";

let portfolioImages = [];

const getImages = () => {
  portfolioImages = [];
  let $fileInput = document.getElementById("portfolioImg");
  let files = Array.from($fileInput.files);
  files.forEach((file) => {
    let reader = new FileReader();
    reader.onloadend = function (event) {
      portfolioImages.push(event.target.result);
      document
        .getElementById("images")
        .insertAdjacentHTML(
          "beforeend",
          `<div class="${styles.imgBlock}" style="background-image: url(${event.target.result})">`
        );
    };
    reader.readAsDataURL(file);
  });
};

const AddImages = () => {
  return (
    <div className={styles.AddImages}>
      <SubTitle text={"Загрузите до 10 изображений в своё портфолио"} />
      <label className={styles.dropArea} for={"portfolioImg"}>
        <span>Добавить фотографию</span>
        <span>+</span>
      </label>
      <div id={"images"} className={styles.uploadedImages}></div>
      <input
        type={"file"}
        accept={".jpg, .jpeg, .png"}
        multiple
        id={"portfolioImg"}
        hidden
        onChange={() => getImages()}
      />
    </div>
  );
};

export default AddImages;
