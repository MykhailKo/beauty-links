import React, { useContext, useEffect, useState } from "react";
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
import authContext from "../../../../context/auth.context";

const calendarOptions = [
  { text: "Google Calendar" },
  { text: "Apple Calendar" },
];

const howYouKnowOptions = [{ text: "По рекомендации" }, { text: "Из соцсети" }];

const RegPersData = ({ PersData, setPersData, nextStep }) => {
  const { login } = useContext(authContext);
  const { loading, request } = useHttp();
  const history = useHistory();

  //Error
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [phoneError, setPhoneError] = useState("");
  const validatePhone = (phone) => {
    if (
      !(
        /^\+?3?8?(0\d{9})$/.test(phone.split("-").join("")) ||
        /^\+?3?8?(0\d{9})$/.test(phone.split(" ").join(""))
      )
    ) {
      setPhoneError("Неверный формат телефона");
    } else {
      setPhoneError("");
    }
  };
  const validateFirstName = (name) => {
    if (name === "") {
      setFirstNameError("Имя не может быть пустым");
    } else {
      setFirstNameError("");
    }
  };
  const validateLastName = (name) => {
    if (name === "") {
      setLastNameError("Фамилия не может быть пустой");
    } else {
      setLastNameError("");
    }
  };
  useEffect(() => {
    if (
      PersData.first_name === "" ||
      PersData.last_name === "" ||
      !(
        /^\+?3?8?(0\d{9})$/.test(PersData.phone.split("-").join("")) ||
        /^\+?3?8?(0\d{9})$/.test(PersData.phone.split(" ").join(""))
      )
    ) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [PersData]);
  const get_token_and_stuff = async () => {
    try {
      const response = await request(
        "/api/v1.0/auth/user/login",
        "POST",
        { email: PersData.email, password: PersData.password },
        {}
      );
      console.log(response);
      login({ ...response });
    } catch (error) {
      console.log(error);
    }
  };
  const registerCustomer = async (e) => {
    try {
      e.preventDefault();
      const response = await request(
        "/api/v1.0/auth/user",
        "POST",
        {
          email: PersData.email,
          password: PersData.password,
          password_confirmation: PersData.password_confirmation,
          first_name: PersData.first_name,
          last_name: PersData.last_name,
          user_role: PersData.user_role,
          phone: PersData.phone.replace("-", "").replace(" ", ""),
          how_you_find: PersData.how_you_find,
        },
        {}
      );
      console.log(response);
      await get_token_and_stuff();
      history.push("/");
    } catch (error) {
      console.log(error);
      await get_token_and_stuff();
      history.push("/");
    }
  };
  const registerMaster = async (e) => {
    try {
      e.preventDefault();
      const response = await request(
        "/api/v1.0/auth/user",
        "POST",
        {
          email: PersData.email,
          password: PersData.password,
          password_confirmation: PersData.password_confirmation,
          first_name: PersData.first_name,
          last_name: PersData.last_name,
          phone: PersData.phone.replace("-", "").replace(" ", ""),
          user_role: PersData.user_role,
          how_you_find: PersData.how_you_find,
          appointment_scheduling: "anything", //here should be some info maaaaaan
        },
        {}
      );
      console.log(response);
      await get_token_and_stuff();
      nextStep();
    } catch (error) {
      console.log(error);
      await get_token_and_stuff();
      nextStep();
    }
  };

  return (
    <div>
      <SecTitle title={"Укажите свои личные данные"} />
      <SubTitle
        text={`Эти данные будут отображены в вашем профиле ${
          PersData.user_role === "master" ? "мастера" : "клиента"
        }.`}
      />
      <form className={styles.persDataForm} id={"persForm"}>
        <RegInput
          value={PersData.name}
          onChange={(e) => {
            setPersData({ ...PersData, first_name: e.target.value });
            validateFirstName(e.target.value);
          }}
          label={"Имя"}
          name={"firstName"}
          error={firstNameError}
        />
        <RegInput
          value={PersData.surname}
          onChange={(e) => {
            setPersData({ ...PersData, last_name: e.target.value });
            validateLastName(e.target.value);
          }}
          label={"Фамилия"}
          name={"lastName"}
          error={lastNameError}
        />
        <RegInput
          value={PersData.phone}
          onChange={(e) => {
            validatePhone(e.target.value);
            setPersData({ ...PersData, phone: e.target.value });
          }}
          label={"Телефон"}
          type={"tell"}
          name={"phoneNumber"}
          error={phoneError}
          title={"Телефон в формате 38XXXXXXXXXX"}
        />
        {PersData.user_role === "master" ? (
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
        ) : (
          ""
        )}

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
            disabled={buttonDisabled}
            loading={loading}
            onClick={(e) => {
              if (validateForm("persForm")) {
                PersData.user_role === "master"
                  ? registerMaster(e)
                  : registerCustomer(e);
              }
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default RegPersData;
