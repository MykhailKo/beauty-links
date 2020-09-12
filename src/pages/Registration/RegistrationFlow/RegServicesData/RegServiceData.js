import React from "react";

import Button from "../../../../components/Button/Button";
import RegTitle from "../../RegTitle/RegTitle";
import RegSubTitle from "../../RegSubTitle/RegSubTitle";

import styles from "./RegServiceData.module.scss";

const RegServiceData = ({ nextStep }) => {
  return (
    <div className={styles.regServiceWrap}>
      <RegTitle text={"Давайте перенесём ваш бизнес в онлайн!"} />
      <RegSubTitle
        text={
          "Для начала, добавьте свои основные услуги и цены. Не переживайте, вы сможете их изменить в любое время в своём личном кабинете."
        }
      />

      <Button text={"Продолжить"} onClick={nextStep} />
    </div>
  );
};

export default RegServiceData;
