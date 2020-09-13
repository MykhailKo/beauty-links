import React from "react";
import Button from "../../../components/Button/Button";
import SecTitle from "../../../components/SecTitle/SecTitle";
import SubTitle from "../../../components/SubTitle/SubTitle";

import styles from "./Fatality.module.scss";

const Fatality = ({ nextStep }) => {
  return (
    <div className={styles.Fatality}>
      <SecTitle title={"Поздравляем!"} />
      <SubTitle text={"Ваш аккаунт готов, чтобы принимать заказы!"} />
      <div className={styles.DropZone}>
        <div>+</div>
        <div>
          Загрузить
          <br />
          аватар
        </div>
      </div>
      <Button text={"Посмотреть мой профиль"} onClick={nextStep} />
    </div>
  );
};

export default Fatality;
