import React from "react";
import styles from "./first-screen.module.scss";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";

const FirstScreen = () => {
  return (
    <div className={"container"}>
      <section className={styles.firstScreenSec}>
        <div className={styles.titleBlock}>
          <h1 className={styles.mainTitle}>
            Мастера красоты и здоровья вашего города
          </h1>
          <h2 className={styles.secondaryTitle}>
            Найдите ближайшего специалиста всего в 3 клика
          </h2>
        </div>
        <form className={styles.searchForm}>
          <Input placeholder={"Введите адрес"} filled={true} />
          <Input placeholder={"Выберете услугу"} filled={true} />
          <Button text={"Поиск"} />
        </form>
        <div className={styles.imageBlock}>
          <div className={styles.girlImg}></div>
        </div>
      </section>
    </div>
  );
};

export default FirstScreen;
