import React, { useContext, useState } from "react";
import ProfileTitle from "../../../components/ProfileTitle/ProfileTitle";
import Button from "../../../components/Button/Button";
import Select from "../../../components/Select/Select";
import Input from "../../../components/Input/Input";
import { useHttp } from "../../../hooks/useHttp";
import authContext from "../../../context/auth.context";

import styles from "./Settings.module.scss";

const Settings = () => {
  const [oldPassword, setoldPassword] = useState("");

  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [liqpayAccount, setLiqpayAccount] = useState("");
  const { request, loading, error } = useHttp();
  const { token, email } = useContext(authContext);
  //errors
  //validation
  //requests
  const submitNewStatus = async (e) => {
    e.preventDefault();
    try {
      const response = await request(
        "/",
        "PUT",
        {},
        { Authorization: `Bearer ${token}` }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const submitNewPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await request(
        "/",
        "PUT",
        {},
        { Authorization: `Bearer ${token}` }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const submitNewEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await request(
        "/",
        "PUT",
        {},
        { Authorization: `Bearer ${token}` }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const submitNewLiqPayAccount = async (e) => {
    e.preventDefault();
    try {
      const response = await request(
        "/",
        "PUT",
        {},
        { Authorization: `Bearer ${token}` }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ProfileTitle
        title={"Настройки"}
        subTitle={"Изменить настройки своего профиля вы можете здесь."}
      />

      <div className={styles.SettingBlock}>
        <h3 className={styles.SettingsBlockTitle}>Статус профиля</h3>
        <div className={styles.select}>
          <Select
            label={"Статус"}
            options={[{ text: "Активный" }, { text: "Неактивный" }]}
            id={"select"}
            theme={""}
          />
        </div>
      </div>

      <div className={styles.SettingBlock}>
        <h3 className={styles.SettingsBlockTitle}>
          Политика конфиденциальности
        </h3>
        <div>
          Ваша политика конфиденциальности стандартная.{" "}
          <a href={"#"}>Подробнее</a>
        </div>
      </div>
      <div className={styles.SettingBlock}>
        <h3 className={styles.SettingsBlockTitle}>Изменить пароль</h3>
        <form className={styles.passwordChangeForm}>
          <Input
            name={"old-password"}
            value={oldPassword}
            onChange={(e) => setoldPassword(e.target.value)}
            error={""}
            type="password"
            placeholder="Введите старый пароль"
          />
          <div className={styles.invisible}></div>
          <Input
            name={"old-password"}
            type="password"
            error={false}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Введите новый пароль"
          />
          <Input
            name={"old-password"}
            type="password"
            error={false}
            value={newPasswordConfirm}
            onChange={(e) => setNewPasswordConfirm(e.target.value)}
            placeholder="Повторите новый пароль"
          />
          <Button text={"Обновить пароль"} onClick={submitNewPassword} />
        </form>
      </div>
      <div className={styles.SettingBlock}>
        <h3 className={styles.SettingsBlockTitle}>Изменить e-mail</h3>
        <form className={styles.passwordChangeForm}>
          <Input
            name={"old-email"}
            error={false}
            value={""}
            placeholder={email}
            disabled={true}
          />
          <Input
            name={"new-email"}
            error={false}
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="Введите новый e-mail"
          />
          <Button text="Обновить e-mail" onClick={submitNewEmail} />
        </form>
      </div>
      <div className={styles.SettingBlock}>
        <h3 className={styles.SettingsBlockTitle}>Банковские данные</h3>
        <form className={styles.bankForm}>
          <div className={styles.currentlyOnly}>
            На данный момент мы работаем только с LiqPay.
          </div>
          <div>
            <a href={"#"}>Как настроить свой аккаунт LiqPay?</a>
          </div>
          <Input
            placeholder={"LiqPay аккаунт"}
            name={"liqpay-account"}
            error={false}
            value={liqpayAccount}
            onChange={(e) => setLiqpayAccount(e.target.value)}
          />
          <div>
            <a href={"#"}>Привязать другую карту</a>
          </div>
          <Button text={"Привязать аккаунт"} onClick={submitNewLiqPayAccount} />
        </form>
      </div>
    </div>
  );
};

export default Settings;
