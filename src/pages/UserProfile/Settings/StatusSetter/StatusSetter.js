import React, { useContext } from "react";
import Preloader from "../../../../components/Preloader/Preloader";
import Select from "../../../../components/Select/Select";
import authContext from "../../../../context/auth.context";
import { useHttp } from "../../../../hooks/useHttp";

import styles from "./StatusSetter.module.scss";

const StatusSetter = (props) => {
  const { token } = useContext(authContext);
  const { request, loading } = useHttp();
  const submitNewStatus = async (e) => {
    e.preventDefault();
    try {
      const response = await request(
        "/api/v1.0/profile/user/settings",
        "PUT",
        { active: e.target.value === "Активный" },
        { Authorization: `Bearer ${token}` }
      );
      if (response.status === 200) {
        props.update();
        alert("Данные успешно обновлены!");
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };
  return (
    <div className={styles.select}>
      {loading ? (
        <Preloader />
      ) : (
        <Select
          label={"Статус"}
          options={[{ text: "Активный" }, { text: "Неактивный" }]}
          id={"select"}
          theme={""}
          value={props.status}
          onChange={submitNewStatus}
        />
      )}
    </div>
  );
};

export default StatusSetter;
