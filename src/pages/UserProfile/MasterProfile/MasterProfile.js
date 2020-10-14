import React, { useState, useContext, useCallback, useEffect } from "react";

import { useHttp } from "../../../hooks/useHttp";
import ProfileTitle from "../../../components/ProfileTitle/ProfileTitle";
import RegInput from "../../../components/RegInput/RegInput";
import Select from "../../../components/Select/Select";
import RadioBtn from "../../../components/RadioBtn/RadioBtn";
import Button from "../../../components/Button/Button";
import authContext from "../../../context/auth.context";

import styles from "./MasterProfile.module.scss";

const MasterProfile = () => {
  const { request } = useHttp();
  const { token } = useContext(authContext);
  const [presInfo, setPresInfo] = useState({});
  const [bio, setBio] = useState({});
  const [contacts, setContacts] = useState({});
  const [medicalBook, setMedicalBook] = useState("");

  // const fetchData = useCallback(async () => {
  //   try {
  //     const response = await request("/api/v1.0/auth/user/", "GET", null, {
  //       Authorization: `Bearer ${token}`,
  //     });
  //     if(response.status === 200){
  //       setPresInfo({name: response.name, birthday: ''})
  //       setBio({bio: response.bio})
  //       setContacts({email: response.email, phone: response.phone, link_to_work: response.link_to_work})
  //     }
  //   }catch(error) {
  //     console.log(error);
  //   }
  // }, [request, token]);
  // useEffect(() => fetchData(), [fetchData])

  // const updateUser = async (e, updatedFileds, callback) => {
  //   e.preventDefault();
  //   try{
  //     const response = await request(
  //       "/api/v1.0/user",
  //       "PUT",
  //       updatedFileds,
  //       { Authorization: `Bearer ${token}` }
  //     );
  //     if(response.status === 200) {
  //       fetchData();
  //       callback();
  //       alert("Данные успешно обновлены.");
  //     }
  //   }catch(error){
  //     console.log(error);
  //   }
  // }
  return (
    <div className={styles.profileWrap}>
      <ProfileTitle
        title={"Мой профиль"}
        subTitle={
          "Здесь вы можете откредактировать информацию о своём профиле и добавить свои работы в порфтолио."
        }
      />
      <section className={styles.inputsGroup}>
        <RegInput
          theme={"prof"}
          label={"Имя"}
          type={"text"}
          title={"Имя"}
          value={"Mary"}
        />
        <RegInput
          theme={"prof"}
          label={"Фамилия"}
          type={"text"}
          title={"Фамилия"}
          value={"Kicher"}
        />
        <RegInput
          theme={"prof"}
          label={"Дата рождения "}
          type={"date"}
          title={"Дата рождения "}
        />
        <Button onClick={() => {}} text={"Обновить"} />
      </section>
      <section className={styles.bioSection}>
        <div className={styles.miniTitle}>Опыт работы </div>
        <div className={styles.desc}>
          Укажите профессиональный стаж, где обучались профессии, в каких
          салонах красоты работали ( последние 3 года). Если готовы оказывать
          разные услуги, например ногтевые и визаж, укажите опыт по каждой
          категории услуг отдельно.
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
        />
        <RegInput
          theme={"prof"}
          type={"email"}
          label={"E-mail"}
          title={"E-mail"}
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
        <Button onClick={() => {}} text={"Обновить"} />
      </section>
      <section className={styles.inputsGroup}>
        <div className={styles.miniTitle}>Санитарная книжка</div>
        <ul className={styles.radiosGroup}>
          <RadioBtn label={"есть"} name={"medbook"} id={"medbook1"} />
          <RadioBtn label={"нет"} name={"medbook"} id={"medbook2"} />
        </ul>
      </section>
    </div>
  );
};

export default MasterProfile;
