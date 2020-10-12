import React, { useContext, useState } from "react";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";
import Preloader from "../../../../components/Preloader/Preloader";
import authContext from "../../../../context/auth.context";
import { useHttp } from "../../../../hooks/useHttp";

import styles from "./EmailSetter.module.scss";

const EmailSetter = (props) => {
  const [newEmail, setNewEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const { request, loading } = useHttp();
  const { token } = useContext(authContext);

  const validateEmail = (email) => {
    if (email === "") {
      setEmailError("");
    } else if (email === props.email) {
      setEmailError("Почтовый адрес не изменён");
    } else {
      if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email)) {
        setEmailError("Неверный формат");
      } else {
        setEmailError("");
      }
    }
  };
  const submitNewEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await request(
        "/api/v1.0/user",
        "PUT",
        { email: newEmail },
        { Authorization: `Bearer ${token}` }
      );
      if (response.status === 200) {
        setNewEmail("");
        props.update();
        alert("Данные успешно обновлены!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return loading ? (
    <Preloader />
  ) : (
    <form className={styles.emailChangeForm}>
      <Input
        name={"old-email"}
        error={false}
        value={""}
        placeholder={props.email}
        disabled={true}
      />
      <Input
        name={"new-email"}
        error={emailError}
        value={newEmail}
        onChange={(e) => {
          validateEmail(e.target.value);
          setNewEmail(e.target.value);
        }}
        placeholder="Введите новый e-mail"
      />
      <Button
        text="Обновить e-mail"
        onClick={submitNewEmail}
        disabled={
          newEmail === "" || newEmail === props.email || emailError !== ""
        }
      />
    </form>
  );
};

export default EmailSetter;
