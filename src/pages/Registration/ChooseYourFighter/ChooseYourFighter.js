import React from "react";
import { useHistory } from "react-router-dom";

import ShBox from "../../../components/ShBox/ShBox";
import SecTitle from "../../../components/SecTitle/SecTitle";

import styles from "./ChooseYourFighter.module.scss";
import SideSelect from "../../../components/SideSelect/SideSelect";

const ChooseYourFighter = ({ nextStep, setProfileType }) => {
  const history = useHistory();
  return (
    <ShBox padding={"2em 0 4em 0"}>
      <SecTitle title={"Почти готово!"} />
      <div className={styles.SubTitle}>
        Не забудьте подтвердить свой e-mail.
      </div>
      <div className={styles.ChooseFighter}>
        <div className={styles.SelectorBlock}>
          <SideSelect
            imagePath={"/assets/img/master.png"}
            buttonClick={() => {
              setProfileType(1);
              nextStep(3);
            }}
            buttonText={"Начать как мастер"}
          />
          <SideSelect
            imagePath={"/assets/img/client.png"}
            buttonClick={() => {
              alert("начинаем клиента");
              setProfileType(2);
              nextStep(3);
              history.push("/");
            }}
            buttonText={"Начать как клиент"}
          />
        </div>
      </div>
    </ShBox>
  );
};

export default ChooseYourFighter;
