import React, { useContext, useState } from "react";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";
import Preloader from "../../../../components/Preloader/Preloader";
import authContext from "../../../../context/auth.context";
import { useHttp } from "../../../../hooks/useHttp";

import styles from "./EmailSetter.module.scss";

const EmailSetter = (props) => {
  const [newEmail, setNewEmail] = useState("");
  const { request, loading } = useHttp();
  const { token } = useContext(authContext);

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
        error={false}
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
        placeholder="Введите новый e-mail"
      />
      <Button text="Обновить e-mail" onClick={submitNewEmail} />
    </form>
  );
};

export default EmailSetter;
