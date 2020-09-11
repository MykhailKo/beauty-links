import React, { useState } from "react";

import RegTitle from "../../RegTitle/RegTitle";
import RegSubTitle from "../../RegSubTitle/RegSubTitle";
import RegInput from "../../../../components/RegInput/RegInput";
import RadioBtn from "../../../../components/RadioBtn/RadioBtn";
import Select from "../../../../components/Select/Select";
import Button from "../../../../components/Button/Button";

import styles from "./RegPersData.module.scss";
import { validateForm } from "../../../../components/validateForm";

const calendarOptions = [
  { text: "Google Calendar" },
  { text: "Google Calendar" },
];

const howYouKnowOptions = [{ text: "По рекомендации" }, { text: "Из соцсети" }];

const RegPersData = ({ step, nextStep }) => {
  const [gender, setGender] = useState("gender3");

  return (
    <div>
      <RegTitle text={"Укажите свои личные данные"} />
      <RegSubTitle
        text={"Эти данные будут отображены в вашем профиле мастера."}
      />
      <form className={styles.persDataForm} id={"persForm"}>
        <RegInput label={"Имя"} name={"firstName"} required={true} />
        <RegInput label={"Фамилия"} name={"lastName"} required={true} />
        <RegInput
          label={"Телефон"}
          type={"tell"}
          name={"phoneNumber"}
          required={true}
        />
        <div className={styles.radioBlock}>
          <label className={styles.radiosLabel}>Пол</label>
          <ul className={styles.radiosList}>
            <RadioBtn
              label={"Мужской"}
              name={"gender"}
              id={"gender1"}
              value={"male"}
              checkedId={gender}
              setChecked={setGender}
            />
            <RadioBtn
              label={"Женский"}
              name={"gender"}
              id={"gender2"}
              value={"female"}
              checkedId={gender}
              setChecked={setGender}
            />
            <RadioBtn
              label={"Не важно"}
              name={"gender"}
              id={"gender3"}
              value={"male"}
              checkedId={gender}
              setChecked={setGender}
            />
          </ul>
        </div>
        <Select
          label={"Выберите тип календаря, который будет вам удобен"}
          id={"calendarType"}
          options={calendarOptions}
          required={true}
        />
        <Select
          label={"Откуда вы о нас узнали?"}
          id={"howYouKnow"}
          options={howYouKnowOptions}
        />
        <div className={styles.btnWrap}>
          <Button
            text={"Продолжить"}
            onClick={() => {
              if (validateForm("persForm")) nextStep(step + 1);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default RegPersData;
