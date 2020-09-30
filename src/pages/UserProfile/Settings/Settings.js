import React from "react";
import ProfileTitle from "../../../components/ProfileTitle/ProfileTitle";
import Button from "../../../components/Button/Button";
import Select from "../../../components/Select/Select";
import Input from "../../../components/Input/Input";
import styles from "./Settings.module.scss";

const Settings = () => {
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
            options={[{ text: "Активный" }]}
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
            error={false}
            value={"sdfsdf"}
            onChange={""}
            type="password"
            placeholder="Введите старый пароль"
          />
          <div></div>
          <Input
            name={"old-password"}
            type="password"
            error={false}
            value={""}
            onChange={""}
            placeholder="Введите новый пароль"
          />
          <Input
            name={"old-password"}
            type="password"
            error={false}
            value={""}
            onChange={""}
            placeholder="Повторите новый пароль"
          />
          <Button text={"Обновить пароль"} />
        </form>
      </div>
      <div className={styles.SettingBlock}>
        <h3 className={styles.SettingsBlockTitle}>Изменить e-mail</h3>
        <form className={styles.passwordChangeForm}>
          <Input
            name={"old-email"}
            error={false}
            value={""}
            onChange={""}
            placeholder="asd@gmail.com"
            disabled={true}
          />
          <Input
            name={"new-email"}
            error={false}
            value={""}
            onChange={""}
            placeholder="Введите новый e-mail"
          />
          <Button text="Обновить e-mail" />
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
          <Input placeholder={"LiqPay аккаунт"} />
          <div>
            <a href={"#"}>Привязать другую карту</a>
          </div>
          {/* <Button text={"Привязать аккаунт"} /> */}
        </form>
      </div>
    </div>
  );
};

export default Settings;
