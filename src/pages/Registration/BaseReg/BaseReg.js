import React, { useEffect, useState } from "react";

import ShBox from "../../../components/ShBox/ShBox";
import SecTitle from "../../../components/SecTitle/SecTitle";
import Button from "../../../components/Button/Button";
import RegInput from "../../../components/RegInput/RegInput";
import CheckBox from "../../../components/CheckBox/CheckBox";

import useWindowSize from "../../../hooks/useWindowSize";

import styles from "./BaseReg.module.scss";
import widths from "../../../assets/scss/_widths.scss";
import { useHttp } from "../../../hooks/useHttp";

const BaseReg = ({ BaseData, setBaseData, nextStep }) => {
  const [width] = useWindowSize();
  const { loading, request, error, clearError } = useHttp();
  const [agreement, setAgreement] = useState(false);
  const [agreementError, setAgreementError] = useState(false);

  //Errors
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordsEqual, setPasswordsEqual] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const validateEmail = (email) => {
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email)) {
      setEmail("Incorrect email");
    } else {
      setEmail("");
    }
  };
  const validatePassword = (password) => {
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password)) {
      setPassword(
        "Minimum six characters, at least one uppercase letter, one lowercase letter and one number"
      );
    } else {
      setPassword("");
    }
  };
  useEffect(() => {
    if (BaseData.password !== BaseData.password_confirmation) {
      setPasswordsEqual("Пароли не совпадают");
    } else {
      setPasswordsEqual("");
    }
  }, [BaseData.password, BaseData.password_confirmation]);

  useEffect(() => {
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(
        BaseData.password
      ) ||
      BaseData.password !== BaseData.password_confirmation ||
      !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(BaseData.email) ||
      agreement !== true
    ) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [BaseData, agreement]);

  const register = async (e) => {
    try {
      e.preventDefault();
      if (agreement === false) {
        setAgreementError(true);
        return;
      }
      clearError();
      const response = await request(
        `/api/v1.0/auth/userExists?email=${BaseData.email}`,
        "GET",
        null,
        {}
      );
      if (response.status === 200) {
        nextStep(2);
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
          error={email || error}
          value={BaseData.email}
          onChange={(e) => {
            validateEmail(e.target.value);
            setBaseData({ ...BaseData, email: e.target.value });
          }}
        />
        <RegInput
          type={"password"}
          label={"Пароль"}
          name={"password"}
          error={password}
          value={BaseData.password}
          onChange={(e) => {
            validatePassword(e.target.value);
            setBaseData({ ...BaseData, password: e.target.value });
          }}
        />
        <RegInput
          type={"password"}
          label={"Подтвердите пароль"}
          name={"passwordConf"}
          required={true}
          error={passwordsEqual}
          minLength={8}
          maxlength={16}
          value={BaseData.password_confirmation}
          onChange={(e) =>
            setBaseData({ ...BaseData, password_confirmation: e.target.value })
          }
        />
        <div className={styles.confPols}>
          <CheckBox
            id="politics"
            required={true}
            checked={agreement}
            setChecked={(e) => {
              setAgreement(e);
              e ? setAgreementError(false) : setAgreementError(true);
            }}
            error={agreementError}
          />
          <span className={styles.confPolsDesc}>
            Подтверждаю, что ознакомился и принимаю условия{" "}
            <a href="#">политики конфиденциальности</a>
          </span>
        </div>
        <Button
          type={"submit"}
          text={"Регистрация"}
          onClick={register}
          disabled={buttonDisabled}
          loading={loading}
        />
      </form>
      <div className={styles.loginMes}>
        Уже есть аккаунт? <a href="#">Войдите.</a>
      </div>
    </ShBox>
  );
};

export default BaseReg;
