import React from "react";

import styles from "./Stepper.module.scss";

const Stepper = ({ step }) => {
  const steps = [
    { text: "Регистрация" },
    { text: "Услуги" },
    { text: "Локация" },
    { text: "Доступность" },
    { text: "Опыт и навыки" },
    { text: "Завершение регистрации" },
  ];
  return (
    <ul className={styles.stepsContainer}>
      {steps.map((item, index) => {
        return (
          <li className={styles.stepBlock} key={index}>
            <div
              className={styles.stepCircle}
              style={
                index + 1 === step
                  ? {
                      backgroundColor: "var(--main-blue)",
                    }
                  : index + 1 < step
                  ? {
                      backgroundColor: "var(--main-blue)",
                      backgroundImage: 'url("/assets/img/icons/check.png")',
                    }
                  : { backgroundColor: "var(--pale-blue)" }
              }
            >
              {index + 1 >= step && index + 1}
            </div>
            <div className={styles.stepDesc}>{item.text}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default Stepper;
