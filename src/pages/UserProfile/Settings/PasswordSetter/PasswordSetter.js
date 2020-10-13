import React, { useState } from "react";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";

import styles from "./PasswordSetter.module.scss";

const PasswordSetter = () => {
  const [oldPassword, setoldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");

  const submitNewPassword = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await request(
    //     "/",
    //     "PUT",
    //     {},
    //     { Authorization: `Bearer ${token}` }
    //   );
    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
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
  );
};

export default PasswordSetter;
