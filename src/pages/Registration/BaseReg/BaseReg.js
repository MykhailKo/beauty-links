import React from "react";

import ShBox from "../../../components/ShBox/ShBox";
import SecTitle from "../../../components/SecTitle/SecTitle";
import Button from "../../../components/Button/Button";
import RegInput from "../../../components/RegInput/RegInput";
import CheckBox from "../../../components/CheckBox/CheckBox";

import { validateForm, checkSimilar } from "../../../components/validateForm";

import styles from "./BaseReg.module.scss";

const BaseReg = ({ nextStep }) => {
  return (
    <ShBox padding={"2em 0"}>
      <SecTitle text={"Регистрация нового пользователя"} />
      <form className={styles.baseRegForm} id={"baseRegForm"}>
        <RegInput
          type={"email"}
          label={"E-mail"}
          name={"email"}
          required={true}
        />
        <RegInput
          type={"password"}
          label={"Пароль"}
          name={"password"}
          required={true}
          minLength={8}
          maxlength={16}
        />
        <RegInput
          type={"password"}
          label={"Подтвердите пароль"}
          name={"passwordConf"}
          required={true}
          minLength={8}
          maxlength={16}
        />
        <div className={styles.confPols}>
          <CheckBox id={"politics"} required={true} />
          <span className={styles.confPolsDesc}>
            Подтверждаю, что ознакомился и принимаю условия{" "}
            <a href="#">политики конфиденциальности</a>
          </span>
        </div>
        <Button
          text={"Регистрация"}
          onClick={() => {
            checkSimilar(
              "passwordConf",
              "password",
              "Пароли должны совпадать!"
            );
            if (validateForm("baseRegForm")) {
              nextStep(2);
              // send data to server
            }
          }}
        />
      </form>
      <div className={styles.loginMes}>
        Уже есть аккаунт? <a href="#">Войдите.</a>
      </div>
    </ShBox>
  );
};

export default BaseReg;
