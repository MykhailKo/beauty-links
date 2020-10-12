import React, { useContext, useEffect, useState } from "react";
import ProfileTitle from "../../../components/ProfileTitle/ProfileTitle";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { useHttp } from "../../../hooks/useHttp";
import authContext from "../../../context/auth.context";

import styles from "./Settings.module.scss";
import EmailSetter from "./EmailSetter/EmailSetter";
import StatusSetter from "./StatusSetter/StatusSetter";
import PasswordSetter from "./PasswordSetter/PasswordSetter";
import LiqPaySetter from "./LiqPaySetter/LiqPaySetter";

const Settings = () => {
  const { request } = useHttp();
  const { token } = useContext(authContext);
  //errors
  //validation
  //requests

  return (
    <div>
      <ProfileTitle
        title={"Настройки"}
        subTitle={"Изменить настройки своего профиля вы можете здесь."}
      />

      <div className={styles.SettingBlock}>
        <h3 className={styles.SettingsBlockTitle}>Статус профиля</h3>
        <StatusSetter status={"Активный"} />
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
        <PasswordSetter />
      </div>
      <div className={styles.SettingBlock}>
        <h3 className={styles.SettingsBlockTitle}>Изменить e-mail</h3>
        <EmailSetter email={"жмых"} />
      </div>
      <div className={styles.SettingBlock}>
        <h3 className={styles.SettingsBlockTitle}>Банковские данные</h3>
        <LiqPaySetter />
      </div>
    </div>
  );
};

export default Settings;
