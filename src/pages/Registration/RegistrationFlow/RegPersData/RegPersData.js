import React, { useEffect, useState } from "react";

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
  { text: "Apple Calendar" },
];

const howYouKnowOptions = [{ text: "По рекомендации" }, { text: "Из соцсети" }];

const RegPersData = ({ PersData, setPersData, nextStep }) => {
  return (
    <div>
      <RegTitle text={"Укажите свои личные данные"} />
      <RegSubTitle
        text={"Эти данные будут отображены в вашем профиле мастера."}
      />
      <form className={styles.persDataForm} id={"persForm"}>
        <RegInput
          value={PersData.name}
          onChange={(e) => setPersData({ ...PersData, name: e.target.value })}
          label={"Имя"}
          name={"firstName"}
          required={true}
          minLength={1}
          maxlength={30}
        />
        <RegInput
          value={PersData.surname}
          onChange={(e) =>
            setPersData({ ...PersData, surname: e.target.value })
          }
          label={"Фамилия"}
          name={"lastName"}
          required={true}
          minLength={1}
          maxlength={30}
        />
        <RegInput
          value={PersData.phone}
          onChange={(e) => setPersData({ ...PersData, phone: e.target.value })}
          label={"Телефон"}
          type={"tell"}
          name={"phoneNumber"}
          required={true}
          pattern={"38-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"}
          title={"Телефон в формате 38-ХХХ-ХХХ-ХХ-ХХ"}
        />
        <div className={styles.radioBlock}>
          <label className={styles.radiosLabel}>Пол</label>
          <ul className={styles.radiosList}>
            <RadioBtn
              label={"Мужской"}
              name={"gender"}
              id={"gender1"}
              value={"male"}
              checkedId={PersData.gender}
              setChecked={(e) => setPersData({ ...PersData, gender: e })}
            />
            <RadioBtn
              label={"Женский"}
              name={"gender"}
              id={"gender2"}
              value={"female"}
              checkedId={PersData.gender}
              setChecked={(e) => setPersData({ ...PersData, gender: e })}
            />
            <RadioBtn
              label={"Не важно"}
              name={"gender"}
              id={"gender3"}
              value={"male"}
              checkedId={PersData.gender}
              setChecked={(e) => setPersData({ ...PersData, gender: e })}
            />
          </ul>
        </div>
        <Select
          label={"Выберите тип календаря, который будет вам удобен"}
          id={"calendarType"}
          options={calendarOptions}
          value={PersData.preferredCalendar}
          required={true}
          onChange={(e) =>
            setPersData({ ...PersData, preferredCalendar: e.target.value })
          }
        />
        <Select
          label={"Откуда вы о нас узнали?"}
          id={"howYouKnow"}
          options={howYouKnowOptions}
          value={PersData.howYouKnow}
          onChange={(e) =>
            setPersData({ ...PersData, howYouKnow: e.target.value })
          }
        />
        <div className={styles.btnWrap}>
          <Button
            text={"Продолжить"}
            onClick={() => {
              if (validateForm("persForm")) nextStep();
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default RegPersData;
