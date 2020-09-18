import React, { useEffect, useState } from "react";
import { useHttp } from "../../../../hooks/useHttp";
import { useHistory } from "react-router-dom";

import RegInput from "../../../../components/RegInput/RegInput";
import RadioBtn from "../../../../components/RadioBtn/RadioBtn";
import Select from "../../../../components/Select/Select";
import Button from "../../../../components/Button/Button";
import SecTitle from "../../../../components/SecTitle/SecTitle";
import SubTitle from "../../../../components/SubTitle/SubTitle";
import { validateForm } from "../../../../components/validateForm";

import styles from "./RegPersData.module.scss";

const calendarOptions = [
  { text: "Google Calendar" },
  { text: "Apple Calendar" },
];

const howYouKnowOptions = [{ text: "По рекомендации" }, { text: "Из соцсети" }];

const RegPersData = ({ PersData, setPersData, nextStep }) => {
  const { loading, request } = useHttp();
  const history = useHistory();

  const registerCustomer = async () => {
    try {
      const response = await request(
        " http://c0818e13d0cc.ngrok.io/api/v1.0/auth/user",
        "POST",
        {
          email: PersData.email,
          password: PersData.password,
          password_confirmation: PersData.password_confirmation,
          first_name: PersData.first_name,
          last_name: PersData.last_name,
          user_role: PersData.user_role,
          phone: PersData.phone,
          how_you_find: PersData.how_you_find,
        },
        {}
      );
      console.log(response);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const registerMaster = async () => {
    try {
      const response = await request(
        " http://c0818e13d0cc.ngrok.io/api/v1.0/auth/user",
        "POST",
        {
          email: PersData.email,
          password: PersData.password,
          password_confirmation: PersData.password_confirmation,
          first_name: PersData.first_name,
          last_name: PersData.last_name,
          phone: PersData.phone,
          user_role: PersData.user_role,
          how_you_find: PersData.how_you_find,
          appointment_scheduling: "anything", //here should be some info maaaaaan
        },
        {}
      );
      console.log(response);
      nextStep();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <SecTitle title={"Укажите свои личные данные"} />
      <SubTitle text={"Эти данные будут отображены в вашем профиле мастера."} />
      <form className={styles.persDataForm} id={"persForm"}>
        <RegInput
          value={PersData.name}
          onChange={(e) =>
            setPersData({ ...PersData, first_name: e.target.value })
          }
          label={"Имя"}
          name={"firstName"}
          required={true}
          minLength={1}
          maxlength={30}
        />
        <RegInput
          value={PersData.surname}
          onChange={(e) =>
            setPersData({ ...PersData, last_name: e.target.value })
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
          pattern={"38[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"}
          title={"Телефон в формате 38XXXXXXXXXX"}
        />
        <div className={styles.radioBlock}>
          <label className={styles.radiosLabel}>Пол</label>
          <ul className={styles.radiosList}>
            <RadioBtn
              label={"Мужской"}
              name={"gender"}
              id={"gender1"}
              value={"m"}
              checkedId={PersData.genderId}
              setChecked={(e) =>
                setPersData({ ...PersData, gender: e.gender, genderId: e.id })
              }
            />
            <RadioBtn
              label={"Женский"}
              name={"gender"}
              id={"gender2"}
              value={"f"}
              checkedId={PersData.genderId}
              setChecked={(e) =>
                setPersData({ ...PersData, gender: e.gender, genderId: e.id })
              }
            />
            <RadioBtn
              label={"Не важно"}
              name={"gender"}
              id={"gender3"}
              value={"m"}
              checkedId={PersData.genderId}
              setChecked={(e) =>
                setPersData({ ...PersData, gender: e.gender, genderId: e.id })
              }
            />
          </ul>
        </div>
        {PersData.user_role === "master" ? (
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
        ) : null}

        <Select
          label={"Откуда вы о нас узнали?"}
          id={"howYouKnow"}
          options={howYouKnowOptions}
          value={PersData.howYouKnow}
          onChange={(e) =>
            setPersData({ ...PersData, how_you_find: e.target.value })
          }
        />
        <div className={styles.btnWrap}>
          <Button
            text={"Продолжить"}
            disabled={loading}
            onClick={() => {
              if (validateForm("persForm")) {
                PersData.user_role === "master"
                  ? registerMaster()
                  : registerCustomer();
              }
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default RegPersData;
