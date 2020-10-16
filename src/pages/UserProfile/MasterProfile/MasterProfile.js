import React, { useState, useContext, useCallback, useEffect } from "react";

import { useHttp } from "../../../hooks/useHttp";
import ProfileTitle from "../../../components/ProfileTitle/ProfileTitle";
import RegInput from "../../../components/RegInput/RegInput";
import Select from "../../../components/Select/Select";
import RadioBtn from "../../../components/RadioBtn/RadioBtn";
import Button from "../../../components/Button/Button";
import authContext from "../../../context/auth.context";
import Preloader from "../../../components/Preloader/Preloader";

import styles from "./MasterProfile.module.scss";

const MasterProfile = () => {
  const { request, loading } = useHttp();
  const { token } = useContext(authContext);
  const [presInfo, setPresInfo] = useState(null);
  const [bio, setBio] = useState(null);
  const [contacts, setContacts] = useState(null);
  const [medicalBook, setMedicalBook] = useState("");

  const fetchData = useCallback(async () => {
    try {
      const response = await request("/api/v1.0/auth/user/", "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      if (response.status === 200) {
        setPresInfo({
          first_name: response.first_name,
          last_name: response.last_name,
          birthday: response.birthday,
        });
        // setBio({ bio: response.bio });
        setContacts({
          email: response.email,
          phone: response.phone,
          // link_to_work: response.link_to_work,
        });
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }, [request, token]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const updatePresInfo = async (e) => {
    try {
      e.preventDefault();
      const data = JSON.parse(JSON.stringify(presInfo));
      if (!data.birthday) {
        delete data.birthday;
      }
      const response = await request("/api/v1.0/user", "PUT", data, {
        Authorization: `Bearer ${token}`,
      });
      if (response.status === 200) {
        alert("Данные успешно обновлены.");
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  const updateContactsInfo = async (e) => {
    try {
      e.preventDefault();
      const data = JSON.parse(JSON.stringify(contacts));
      delete data.email;
      const response = await request("/api/v1.0/user", "PUT", data, {
        Authorization: `Bearer ${token}`,
      });
      if (response.status === 200) {
        alert("Данные успешно обновлены.");
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  return (
    <div className={styles.profileWrap}>
      <ProfileTitle
        title={"Мой профиль"}
        subTitle={
          "Здесь вы можете откредактировать информацию о своём профиле и добавить свои работы в порфтолио."
        }
      />
      {loading ? (
        <Preloader />
      ) : (
        <>
          <section className={styles.inputsGroup}>
            <RegInput
              theme={"prof"}
              label={"Имя"}
              type={"text"}
              title={"Имя"}
              value={presInfo?.first_name || ""}
              onChange={(e) =>
                setPresInfo({
                  ...presInfo,
                  first_name: e.target.value,
                })
              }
            />
            <RegInput
              theme={"prof"}
              label={"Фамилия"}
              type={"text"}
              title={"Фамилия"}
              value={presInfo?.last_name || ""}
              onChange={(e) =>
                setPresInfo({
                  ...presInfo,
                  last_name: e.target.value,
                })
              }
            />
            <RegInput
              theme={"prof"}
              label={"Дата рождения"}
              type={"date"}
              title={"Дата рождения"}
              value={presInfo?.birthday || ""}
              onChange={(e) =>
                setPresInfo({
                  ...presInfo,
                  birthday: e.target.value,
                })
              }
            />
            <Button
              onClick={updatePresInfo}
              text={"Обновить"}
              loading={loading}
            />
          </section>
          <section className={styles.bioSection}>
            <div className={styles.miniTitle}>Опыт работы </div>
            <div className={styles.desc}>
              Укажите профессиональный стаж, где обучались профессии, в каких
              салонах красоты работали ( последние 3 года). Если готовы
              оказывать разные услуги, например ногтевые и визаж, укажите опыт
              по каждой категории услуг отдельно.
            </div>
            <textarea placeholder={"Поле для ввода текста"} rows={7}></textarea>
            <Button onClick={() => {}} text={"Обновить"} />
          </section>
          <section className={styles.inputsGroup}>
            <div className={styles.miniTitle}>Контакты</div>
            <RegInput
              theme={"prof"}
              type={"tell"}
              label={"Телефон"}
              title={"Телефон"}
              value={contacts?.phone}
              onChange={(e) =>
                setContacts({ ...contacts, phone: e.target.value })
              }
            />
            <RegInput
              theme={"prof"}
              type={"email"}
              label={"E-mail"}
              title={"E-mail"}
              disabled={true}
              value={contacts?.email}
              onChange={(e) =>
                setContacts({ ...contacts, email: e.target.value })
              }
            />
            <div className={styles.selectWrap}>
              <label htmlFor={"city"}>Город</label>
              <Select id={"city"} options={[]} theme={"common"} />
            </div>
            <RegInput
              theme={"prof"}
              type={"url"}
              label={"Ссылка на работы"}
              title={"Ссылка на работы"}
            />
            <Button
              onClick={updateContactsInfo}
              text={"Обновить"}
              loading={loading}
            />
          </section>
          <section className={styles.inputsGroup}>
            <div className={styles.miniTitle}>Санитарная книжка</div>
            <ul className={styles.radiosGroup}>
              <RadioBtn label={"есть"} name={"medbook"} id={"medbook1"} />
              <RadioBtn label={"нет"} name={"medbook"} id={"medbook2"} />
            </ul>
          </section>
        </>
      )}
    </div>
  );
};

export default MasterProfile;
