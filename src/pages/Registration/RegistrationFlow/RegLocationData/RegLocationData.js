import React from "react";

import Switcher from "../../../../components/Switcher/Switcher";
import RegInput from "../../../../components/RegInput/RegInput";
import SecTitle from "../../../../components/SecTitle/SecTitle";
import SubTitle from "../../../../components/SubTitle/SubTitle";
import Button from "../../../../components/Button/Button";

import styles from "./RegLocationData.module.scss";

const RegLocationData = ({ LocationData, setLocationData, nextStep }) => {
  return (
    <div>
      <SecTitle text={"Ваше расположение для работы"} />
      <SubTitle
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
          value={LocationData.SalonName}
          onChange={(e) =>
            setLocationData({ ...LocationData, SalonName: e.target.value })
          }
          label={"Название вашего салона (необязательно)"}
        />
        <RegInput
          value={LocationData.SalonAddress}
          onChange={(e) =>
            setLocationData({ ...LocationData, SalonAddress: e.target.value })
          }
          label={"Найдите адрес вашего салона"}
          required={true}
        />
        <Button onClick={nextStep} text="Продолжить" />
      </form>
    </div>
  );
};

export default RegLocationData;
