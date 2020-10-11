import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../../components/Button/Button";
import SecTitle from "../../../components/SecTitle/SecTitle";
import SubTitle from "../../../components/SubTitle/SubTitle";
import authContext from "../../../context/auth.context";
import { useHttp } from "../../../hooks/useHttp";

import styles from "./Fatality.module.scss";

const Fatality = ({ avatar, setAvatar, nextStep }) => {
  const { token } = useContext(authContext);
  const { request, loading } = useHttp();
  const history = useHistory();
  const updateAvatar = (e) => {
    setAvatar(URL.createObjectURL(e.target.files[0]));
  };
  const sendAvatar = async () => {
    try {
      const data = new FormData();
      const blob = await fetch(avatar).then((r) => r.blob());
      data.append("profileImage", blob, blob.name);
      const response = await request("/api/v1.0/master/avatar", "POST", data, {
        Authorization: `Bearer ${token}`,
      });
      if (response.status === 200) {
        return 200;
      }
    } catch (error) {
      console.log(error);
      alert(
        "Не удалось сохранить аватар, повторите операцию или попробуйте позже."
      );
    }
  };
  const submit = async () => {
    try {
      if (avatar) {
        await sendAvatar();
      }
      history.push("/user");
    } catch (error) {
      console.log(error);
      alert();
    }
  };
  return (
    <div className={styles.Fatality}>
      <SecTitle title={"Поздравляем!"} />
      <SubTitle text={"Ваш аккаунт готов, чтобы принимать заказы!"} />
      <label
        htmlFor={"avatar"}
        className={styles.DropZone}
        id={"avatarLabel"}
        style={{ backgroundImage: avatar ? `url(${avatar})` : "" }}
      >
        {avatar ? (
          ""
        ) : (
          <>
            <div>+</div>
            <div>
              Загрузить
              <br />
              аватар
            </div>
          </>
        )}
      </label>
      <input
        type={"file"}
        accept={".jpg, .jpeg, .png"}
        id={"avatar"}
        hidden
        onChange={updateAvatar}
      />
      <Button
        text={"Посмотреть мой профиль"}
        onClick={submit}
        loading={loading}
      />
    </div>
  );
};

export default Fatality;
