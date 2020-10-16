import React from "react";

import styles from "./RegisterNow.module.scss";
import SecTitle from "../../../components/SecTitle/SecTitle";
import Button from "../../../components/Button/Button";
const RegisterNow = () => {
  return (
    <div className={styles.RegisterNowBlock}>
      <div className={styles.container}>
        <SecTitle title={"Зарегистрируйтесь сейчас бесплатно!"} />
        <div className={styles.MainCategory}>
          <div className={styles.quote}>
            <span>
              Заработок от данного сайта помог мне оплатить семейный отдых в
              этом году.
            </span>
          </div>
          <div className={styles.girl}>
            <img src="/assets/img/girl2.png" alt="girl2" />
          </div>
          <div className={styles.Description}>
            <div className={styles.name}>Анна</div>
            <div className={styles.profession}>Визажист</div>
            <div className={styles.story}>
              Анна принимает заказы с сайта в течение 2 месяцев
            </div>
          </div>
        </div>
        <div className={styles.ButtonsCategory}>
          <div>
            <Button text={"Узнать больше"} filled={false} />
          </div>
          <div>
            <Button text={"Зарегистрироваться"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterNow;
