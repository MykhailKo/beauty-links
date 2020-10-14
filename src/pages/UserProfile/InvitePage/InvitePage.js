import React, { useContext, useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import ProfileTitle from "../../../components/ProfileTitle/ProfileTitle";
import authContext from "../../../context/auth.context";
import { useHttp } from "../../../hooks/useHttp";

import styles from "./InvitePage.module.scss";

const InvitePage = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const { token } = useContext(authContext);
  const { request, loading } = useHttp();
  useEffect(() => {
    if (email !== "") {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [email]);

  const validateMail = (email) => {
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email)) {
      setEmailError("Некорректный e-mail");
    } else {
      setEmailError("");
    }
  };
  const sendInvitation = async (e) => {
    try {
      e.preventDefault();
      const response = await request("/api/v1.0/invite", "POST", { email }, {});
      if (response.status === 200) {
        alert("Приглашение отправлено успешно!");
        setEmail("");
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  return (
    <div>
      <ProfileTitle
        title={"Пригласить людей"}
        subTitle={
          "Если у вас есть прошлые клиенты, которых вы могли бы пригласить зарегистрироваться на этом сайте, то вы можете сделать это здесь."
        }
      />
      <div className={styles.block}>
        <h1 className={styles.header}>Отправить приглашения</h1>
        <form className={styles.form}>
          <Input
            placeholder={"Введите e-mail"}
            value={email}
            onChange={(e) => {
              validateMail(e.target.value);
              setEmail(e.target.value);
            }}
            error={emailError}
          />
          <Button
            text={"Отправить приглашение"}
            disabled={!!emailError || buttonDisabled}
            loading={loading}
            onClick={sendInvitation}
          />
        </form>
      </div>
    </div>
  );
};

export default InvitePage;
