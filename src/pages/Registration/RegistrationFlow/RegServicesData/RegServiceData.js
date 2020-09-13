import React from "react";

import Button from "../../../../components/Button/Button";
import SecTitle from "../../../../components/SecTitle/SecTitle";
import SubTitle from "../../../../components/SubTitle/SubTitle";

import styles from "./RegServiceData.module.scss";

const RegServiceData = ({ nextStep }) => {
  return (
    <div className={styles.regServiceWrap}>
      <SecTitle text={"Давайте перенесём ваш бизнес в онлайн!"} />
      <SubTitle
        text={
          "Для начала, добавьте свои основные услуги и цены. Не переживайте, вы сможете их изменить в любое время в своём личном кабинете."
        }
      />

      <Button text={"Продолжить"} onClick={nextStep} />
    </div>
  );
};

export default RegServiceData;
