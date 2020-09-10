import React from "react";

import ShBox from "../../../components/ShBox/ShBox";
import RegTitle from "../RegTitle/RegTitle";

import styles from "./ChooseYourFighter.module.scss";
import SideSelect from "../../../components/SideSelect/SideSelect";

const ChooseYourFighter = ({ nextStep }) => {
  return (
    <ShBox padding={'2em 0 4em 0'}>
      <RegTitle text={"Почти готово!"} />
      <div className={styles.SubTitle}>
        Не забудьте подтвердить свой e-mail.
      </div>
      <div className={styles.ChooseFighter}>
        <div className={styles.SelectorBlock}>
          <SideSelect
            imagePath={"/assets/img/master.png"}
            buttonClick={() => {
              alert("начинаем мастера");
              nextStep(3);
            }}
            buttonText={"Начать как мастер"}
          />
          <SideSelect
            imagePath={"/assets/img/client.png"}
            buttonClick={() => {
              alert("начинаем клиента");
              nextStep(3);
            }}
            buttonText={"Начать как клиент"}
          />
        </div>
      </div>
    </ShBox>
  );
};

export default ChooseYourFighter;
