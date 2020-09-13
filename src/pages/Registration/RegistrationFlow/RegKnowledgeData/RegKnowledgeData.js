import React from "react";

import Button from "../../../../components/Button/Button";
import RadioBtn from "../../../../components/RadioBtn/RadioBtn";
import RegInput from "../../../../components/RegInput/RegInput";
import SecTitle from "../../../../components/SecTitle/SecTitle";
import SubTitle from "../../../../components/SubTitle/SubTitle";
import AddImages from "../AddImages/AddImages";

import styles from "./RegKnowledgeData.module.scss";
const formatDate = (date = new Date()) => {
  let month = "" + (date.getMonth() + 1),
    day = "" + date.getDate(),
    year = date.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};
const RegKnowledgeData = ({ KnowledgeData, setKnowledgeData, nextStep }) => {
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
          value={KnowledgeData.skills}
          onChange={(e) => {
            setKnowledgeData({ ...KnowledgeData, skills: e.target.value });
          }}
        />
        {/* тут вставлю компонент с прошлого проекта вместо reginput */}
      </div>
      <div>
        <SubTitle text={"Введите свой опыт работы"} />
        <RegInput
          label={"Я работаю с..."}
          value={formatDate(KnowledgeData.expirience)}
          type={"date"}
          onChange={(e) =>
            setKnowledgeData({
              ...KnowledgeData,
              expirience: new Date(e.target.value),
            })
          }
        />
        {/* тут нужен выбор даты */}
      </div>

      <AddImages />
      <div className={styles.MedicalBlock}>
        <span>
          Есть ли у вас медицинское разрешение на предоставление услуг?
        </span>
        <RadioBtn
          name={"medical"}
          value={true}
          id={"medical-yes"}
          checkedId={KnowledgeData.hasMedical.id}
          setChecked={(e) =>
            setKnowledgeData({
              ...KnowledgeData,
              hasMedical: { id: e, value: true },
            })
          }
          label={"да"}
        />
        <RadioBtn
          name={"medical"}
          value={false}
          id={"medical-no"}
          checkedId={KnowledgeData.hasMedical.id}
          setChecked={(e) =>
            setKnowledgeData({
              ...KnowledgeData,
              hasMedical: { id: e, value: false },
            })
          }
          label={"нет"}
        />
      </div>
      <Button onClick={nextStep} text={"Завершить регистрацию"} />
    </div>
  );
};

export default RegKnowledgeData;
