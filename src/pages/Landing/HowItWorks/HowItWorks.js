import React from "react";
import SecTitle from "../../../components/SecTitle/SecTitle";
import Button from "../../../components/Button/Button";
import styles from "./HowItWorks.module.scss";
import Step from "../Step/Step";

const HowItWorks = () => {
  const steps = [
    "Введите желаемые услуги и местоположение",
    "Выберите желаемую дату и место где Вы хотели бы получить услугу (Дом, офис, салон)",
    "Ознакомтесь со списком мастеров, которые соответствуют критериям вашего запроса",
    "Выберите и запишитесь к специалисту, оплатив онлайн",
  ];
  return (
    <div className={styles.container}>
      <SecTitle title="Как это работает?" />
      <div className={styles.Steps}>
        {steps.map((step, index) => {
          return <Step text={step} number={index + 1} />;
        })}
      </div>
      <Button text={"Начать"} />
    </div>
  );
};

export default HowItWorks;
