import React from "react";

import ShBox from "../../../components/ShBox/ShBox";
import SecTitle from "../../../components/SecTitle/SecTitle";
import Button from "../../../components/Button/Button";
import RegInput from "../../../components/RegInput/RegInput";
import CheckBox from "../../../components/CheckBox/CheckBox";

import { validateForm, checkSimilar } from "../../../components/validateForm";
import useWindowSize from "../../../hooks/useWindowSize";

import styles from "./BaseReg.module.scss";
import widths from "../../../assets/scss/_widths.scss";
import { useHttp } from "../../../hooks/useHttp";

const BaseReg = ({ BaseData, setBaseData, nextStep }) => {
  const [width] = useWindowSize();
  const { loading, request, error, clearError } = useHttp();

  const register = async (e) => {
    try {
      e.preventDefault();
      checkSimilar("passwordConf", "password", "Пароли должны совпадать!");
      if (validateForm("baseRegForm")) {
        clearError();
        const response = await request(
          `https://a32e6d5d28e2.ngrok.io/api/v1.0/auth/userExists?email=${BaseData.email}`,
          "GET",
          null,
          {}
        );
        if (response.status === 200) {
          nextStep(2);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ShBox padding={width < parseInt(widths.break_md) ? "0.5em 0" : "2em 0"}>
      <SecTitle title={"Регистрация нового пользователя"} />
      <form className={styles.baseRegForm} id={"baseRegForm"}>
        <RegInput
          type={"email"}
          label={"E-mail"}
          name={"email"}
          required={true}
          error={error}
          value={BaseData.email}
          onChange={(e) => setBaseData({ ...BaseData, email: e.target.value })}
        />
        <RegInput
          type={"password"}
          label={"Пароль"}
          name={"password"}
          required={true}
          minLength={8}
          maxlength={16}
          value={BaseData.password}
          onChange={(e) =>
            setBaseData({ ...BaseData, password: e.target.value })
          }
        />
        <RegInput
          type={"password"}
          label={"Подтвердите пароль"}
          name={"passwordConf"}
          required={true}
          minLength={8}
          maxlength={16}
          value={BaseData.password_confirmation}
          onChange={(e) =>
            setBaseData({ ...BaseData, password_confirmation: e.target.value })
          }
        />
        <div className={styles.confPols}>
          <CheckBox id={"politics"} required={true} />
          <span className={styles.confPolsDesc}>
            Подтверждаю, что ознакомился и принимаю условия{" "}
            <a href="#">политики конфиденциальности</a>
          </span>
        </div>
        <Button text={"Регистрация"} onClick={register} disabled={loading} />
      </form>
      <div className={styles.loginMes}>
        Уже есть аккаунт? <a href="#">Войдите.</a>
      </div>
    </ShBox>
  );
};

export default BaseReg;
