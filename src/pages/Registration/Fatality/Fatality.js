import React from "react";
import Button from "../../../components/Button/Button";
import SecTitle from "../../../components/SecTitle/SecTitle";
import SubTitle from "../../../components/SubTitle/SubTitle";

import styles from "./Fatality.module.scss";

const getAvatar = () => {
  let file = document.getElementById("avatar").files[0];
  let reader = new FileReader();
  reader.onloadend = function (event) {
    document.getElementById(
      "avatarLabel"
    ).style.backgroundImage = `url(${event.target.result})`;
    document.getElementById("avatarLabel").innerHTML = "";
  };
  reader.readAsDataURL(file);
};

const Fatality = ({ nextStep }) => {
  return (
    <div className={styles.Fatality}>
      <SecTitle title={"Поздравляем!"} />
      <SubTitle text={"Ваш аккаунт готов, чтобы принимать заказы!"} />
      <label for={"avatar"} className={styles.DropZone} id={"avatarLabel"}>
        <div>+</div>
        <div>
          Загрузить
          <br />
          аватар
        </div>
      </label>
      <input
        type={"file"}
        accept={".jpg, .jpeg, .png"}
        id={"avatar"}
        hidden
        onChange={() => getAvatar()}
      />
      <Button text={"Посмотреть мой профиль"} onClick={nextStep} />
    </div>
  );
};

export default Fatality;
