import React from "react";

import SubTitle from "../../../../components/SubTitle/SubTitle";

import styles from "./AddImages.module.scss";

// let portfolioImages = [];

// const getImages = () => {
//   portfolioImages = [];
//   let $fileInput = document.getElementById("portfolioImg");
//   let files = Array.from($fileInput.files);
//   files.forEach((file) => {
//     let reader = new FileReader();
//     reader.onloadend = function (event) {
//       portfolioImages.push(event.target.result);
//       document
//         .getElementById("images")
//         .insertAdjacentHTML(
//           "beforeend",
//           `<div class="${styles.imgBlock}" style="background-image: url(${event.target.result})">`
//         );
//     };
//     reader.readAsDataURL(file);
//   });
// };

const AddImages = ({ KnowledgeData, setKnowledgeData }) => {
  const updateImages = (e) => {
    const readyFiles = Object.values(e.target.files).map((file) => {
      return URL.createObjectURL(file);
    });

    if (readyFiles.length + KnowledgeData.images.length > 10) {
      console.error("too much files");
      return;
    }
    setKnowledgeData({
      ...KnowledgeData,
      images: [...KnowledgeData.images, ...readyFiles],
    });
  };

  return (
    <div className={styles.AddImages}>
      <SubTitle text={"Загрузите до 10 изображений в своё портфолио"} />
      <label className={styles.dropArea} for={"portfolioImg"}>
        <span>Добавить фотографию</span>
        <span>+</span>
      </label>
      <div id={"images"} className={styles.uploadedImages}>
        {KnowledgeData.images.map((el, i) => {
          return (
            <div
              key={i}
              className={styles.imgBlock}
              style={{ backgroundImage: `url(${el})` }}
            ></div>
          );
        })}
      </div>
      <input
        type={"file"}
        accept={".jpg, .jpeg, .png"}
        multiple
        id={"portfolioImg"}
        hidden
        onChange={updateImages}
      />
    </div>
  );
};

export default AddImages;
