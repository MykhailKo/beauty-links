import React, { useContext, useEffect } from "react";

import Button from "../../../../components/Button/Button";
import RadioBtn from "../../../../components/RadioBtn/RadioBtn";
import RegInput from "../../../../components/RegInput/RegInput";
import SecTitle from "../../../../components/SecTitle/SecTitle";
import SubTitle from "../../../../components/SubTitle/SubTitle";
import authContext from "../../../../context/auth.context";
import { useHttp } from "../../../../hooks/useHttp";
import AddImages from "../AddImages/AddImages";

import styles from "./RegKnowledgeData.module.scss";

const RegKnowledgeData = ({ KnowledgeData, setKnowledgeData, nextStep }) => {
  const { token } = useContext(authContext);
  const { request, loading } = useHttp();
  const formatDate = (date) => {
    const readyDate = date === "" ? new Date() : date;
    let month = "" + (readyDate.getMonth() + 1),
      day = "" + readyDate.getDate(),
      year = readyDate.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  useEffect(() => {
    formatDate(KnowledgeData.start_working_date);
  }, [KnowledgeData.start_working_date]);

  const sendPhotos = async () => {
    try {
      const data = new FormData();

      for (const url of KnowledgeData.images) {
        const blob = await fetch(url).then((r) => r.blob());
        data.append("file", blob, blob.name);
      }

      const response = await request("/api/v1.0/master/images", "POST", data, {
        Authorization: `Bearer ${token}`,
      });
      if (response.status === 200) {
        return 200;
      }
    } catch (error) {
      console.log(error);
      alert(
        "Что-то пошло не так, попробуйте ещё раз или повторите запрос позже."
      );
    }
  };
  const sendData = async () => {
    try {
      const response = await request(
        "/api/v1.0/master/trustAndSafety",
        "POST",
        {
          ...KnowledgeData,
          images: null,
          medical_disclaimer_form: KnowledgeData.medical_disclaimer_form.value,
        },
        {
          Authorization: `Bearer ${token}`,
        }
      );
      if (response.status === 200) {
        return 200;
      }
    } catch (error) {
      console.log(error);
      alert(
        "Что-то пошло не так, попробуйте ещё раз или повторите запрос позже."
      );
    }
  };
  const submit = async (e) => {
    try {
      e.preventDefault();
      const status = await sendData();
      if (status === 200) await sendPhotos();
      nextStep();
    } catch (error) {
      console.log(error);
      alert(
        "Что-то пошло не так, попробуйте ещё раз или повторите запрос позже."
      );
    }
  };
  return (
    <div className={styles.RegKnowledgeData}>
      <SecTitle title={"Опыт и навыки"} />
      <SubTitle
        text={
          "Расскажите нам о своих навыках и опыте. Эта информация будет отражена в профиле."
        }
      />
      <div>
        <SubTitle text={"Введите свои навыки"} />
        <RegInput
          placeholder={"Начните набирать текст..."}
          value={KnowledgeData.qualifications.join(" ")}
          onChange={(e) => {
            setKnowledgeData({
              ...KnowledgeData,
              qualifications: e.target.value.split(" "),
            });
          }}
        />
        {/* тут вставлю компонент с прошлого проекта вместо reginput */}
      </div>
      <div>
        <SubTitle text={"Введите свой опыт работы"} />
        <RegInput
          label={"Я работаю с..."}
          value={formatDate(KnowledgeData.start_working_date)}
          type={"date"}
          onChange={(e) =>
            setKnowledgeData({
              ...KnowledgeData,
              start_working_date: new Date(e.target.value),
            })
          }
        />
      </div>

      <AddImages
        KnowledgeData={KnowledgeData}
        setKnowledgeData={setKnowledgeData}
      />
      <div className={styles.MedicalBlock}>
        <span>
          Есть ли у вас медицинское разрешение на предоставление услуг?
        </span>
        <RadioBtn
          name={"medical"}
          value={true}
          id={"medical-yes"}
          checkedId={KnowledgeData.medical_disclaimer_form.id}
          setChecked={(e) =>
            setKnowledgeData({
              ...KnowledgeData,
              medical_disclaimer_form: { id: e.id, value: true },
            })
          }
          label={"да"}
        />
        <RadioBtn
          name={"medical"}
          value={false}
          id={"medical-no"}
          checkedId={KnowledgeData.medical_disclaimer_form.id}
          setChecked={(e) =>
            setKnowledgeData({
              ...KnowledgeData,
              medical_disclaimer_form: { id: e.id, value: false },
            })
          }
          label={"нет"}
        />
      </div>
      <Button
        onClick={submit}
        text={"Завершить регистрацию"}
        loading={loading}
      />
    </div>
  );
};

export default RegKnowledgeData;
