import React from "react";

import Switcher from "../../../../components/Switcher/Switcher";
import RegInput from "../../../../components/RegInput/RegInput";
import RegSubTitle from "../../RegSubTitle/RegSubTitle";
import RegTitle from "../../RegTitle/RegTitle";
import Button from "../../../../components/Button/Button";

import styles from "./RegLocationData.module.scss";

const RegLocationData = ({ LocationData, setLocationData, nextStep }) => {
  return (
    <div>
      <RegTitle text={"Ваше расположение для работы"} />
      <RegSubTitle
        text={
          "Вы можете выбрать своё удобное место для работы. Предложение действительно для выездных либо услуг в салоне."
        }
      />
      <form className={styles.LocationForm}>
        <div className={styles.WorkType}>
          <div className={styles.title}>Выездные услуги</div>
          <Switcher
            state={LocationData.exitService}
            switchState={(state) => {
              console.log({ ...LocationData }, state);
              setLocationData({ ...LocationData, exitService: state });
            }}
          />
        </div>
        <div className={styles.WorkType}>
          <div className={styles.title}>Работа в салоне</div>
          <Switcher
            state={LocationData.workAtSalon}
            switchState={(state) =>
              setLocationData({ ...LocationData, workAtSalon: state })
            }
          />
        </div>
        <RegInput
          value=""
          onChange={() => alert("changed")}
          label={"Название вашего салона (необязательно)"}
        />
        <RegInput label={"Найдите адрес вашего салона"} required={true} />
        <Button onClick={nextStep} text="Продолжить" />
      </form>
    </div>
  );
};

export default RegLocationData;
