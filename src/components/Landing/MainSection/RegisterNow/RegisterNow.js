import React from "react";

import styles from "./RegisterNow.module.scss";
import SecTitle from "../SecTitle/SecTitle";
import Button from "../../../common/Button/Button";
const RegisterNow = () => {
  return (
    <div className={styles.RegisterNowBlock}>
      <div className={styles.container}>
        <SecTitle title={"Зарегистрируйтесь сейчас бесплатно!"} />
        <div className={styles.MainCategory}>
          <div></div>
          <img src="/assets/img/girl2.png" alt="girl2" />
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
            <Button text={"узнать больше"} filled={false} />
          </div>
          <div>
            <Button text={"зарегистрироваться"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterNow;
