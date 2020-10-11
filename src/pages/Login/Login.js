import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import Button from "../../components/Button/Button";
import RegInput from "../../components/RegInput/RegInput";
import SecTitle from "../../components/SecTitle/SecTitle";
import ShBox from "../../components/ShBox/ShBox";
import useWindowSize from "../../hooks/useWindowSize";
import widths from "../../assets/scss/_widths.scss";

import styles from "./Login.module.scss";
import authContext from "../../context/auth.context";

const Login = () => {
  const [width] = useWindowSize();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [potentialError, setPotentionalError] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const history = useHistory();
  const { login } = useContext(authContext);
  const { request, loading } = useHttp();
  useEffect(() => {
    username === ""
      ? setButtonDisabled(true)
      : password === ""
      ? setButtonDisabled(true)
      : setButtonDisabled(false);
  }, [password, username]);

  const localLogin = async (e) => {
    try {
      setPotentionalError("");
      e.preventDefault();
      const response = await request(
        "/api/v1.0/auth/user/login",
        "POST",
        { email: username, password },
        {}
      );
      if (response.status === 200) {
        login(response);
        history.push("/user");
      }
    } catch (error) {
      console.log(error);
      setPotentionalError(error.message);
    }
  };
  return (
    <main className={"container"}>
      <div className={styles.loginContainer}>
        <ShBox
          padding={width < parseInt(widths.break_md) ? "0.5em 0" : "2em 0"}
        >
          <SecTitle title={"Вход в аккаунт"} />
          <form className={styles.baseRegForm} id={"login-form"}>
            <RegInput
              type={"email"}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              label={"E-mail"}
              name={"email"}
              required={true}
            />
            <RegInput
              type={"password"}
              label={"Пароль"}
              name={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={potentialError}
            />
            <Button
              type={"submit"}
              text={"Войти"}
              disabled={buttonDisabled}
              loading={loading}
              onClick={localLogin}
            />
          </form>
          <div className={styles.loginMes}>
            Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
          </div>
        </ShBox>
      </div>
    </main>
  );
};

export default Login;
