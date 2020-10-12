import React, { useCallback, useContext, useEffect, useState } from "react";
import ProfileTitle from "../../../components/ProfileTitle/ProfileTitle";
import EmailSetter from "./EmailSetter/EmailSetter";
import StatusSetter from "./StatusSetter/StatusSetter";
import PasswordSetter from "./PasswordSetter/PasswordSetter";
import LiqPaySetter from "./LiqPaySetter/LiqPaySetter";
import Preloader from "../../../components/Preloader/Preloader";
import { useHttp } from "../../../hooks/useHttp";
import authContext from "../../../context/auth.context";

import styles from "./Settings.module.scss";

const Settings = () => {
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const { request } = useHttp();
  const { token } = useContext(authContext);
  const fetchData = useCallback(async () => {
    setEmail("");
    try {
      const response = await request("/api/v1.0/auth/user/", "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      if (response.status === 200) {
        setEmail(response.email);
        setStatus(response.active ? "Активный" : "Неактивный");
      }
    } catch (error) {
      console.log(error);
    }
  }, [request, token]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return email ? (
    <div>
      <ProfileTitle
        title={"Настройки"}
        subTitle={"Изменить настройки своего профиля вы можете здесь."}
      />

      <div className={styles.SettingBlock}>
        <h3 className={styles.SettingsBlockTitle}>Статус профиля</h3>
        <StatusSetter status={status} update={fetchData} />
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
        <EmailSetter email={email} update={fetchData} />
      </div>
      <div className={styles.SettingBlock}>
        <h3 className={styles.SettingsBlockTitle}>Банковские данные</h3>
        <LiqPaySetter />
      </div>
    </div>
  ) : (
    <Preloader />
  );
};

export default Settings;
