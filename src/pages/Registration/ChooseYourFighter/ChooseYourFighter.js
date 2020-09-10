import React from "react";

import ShBox from "../../../components/ShBox/ShBox";
import SecTitle from "../../Landing/SecTitle/SecTitle";

import styles from "./ChooseYourFighter.module.scss";
import SideSelect from "../../../components/SideSelect/SideSelect";

const ChooseYourFighter = () => {
  return (
    <ShBox>
      <div className={styles.ChooseFiglter}>
        <SecTitle title={"Почти готово!"} />
        <div className={styles.SubTitle}>
          Не забудьте подтвердить свой e-mail.
        </div>
        <div className={styles.SelectorBlock}>
          <SideSelect
            imagePath={"/assets/img/master.png"}
            buttonClick={() => {
              alert("начинаем мастера");
            }}
            buttonText={"Начать как мастер"}
          />
          <SideSelect
            imagePath={"/assets/img/client.png"}
            buttonClick={() => {
              alert("начинаем клиента");
            }}
            buttonText={"Начать как клиент"}
          />
        </div>
      </div>
    </ShBox>
  );
};

export default ChooseYourFighter;
