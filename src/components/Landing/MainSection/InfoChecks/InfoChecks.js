import React from "react";

import SecTitle from "../SecTitle/SecTitle";

import styles from "./InfoChecks.module.scss";

const InfoChecks = ({
  secTitle,
  firstTitle,
  secondTitle,
  firstList,
  secondList,
}) => {
  return (
    <div className={"container"}>
      <section className={styles.checksSec}>
        <SecTitle title={secTitle} />
        <div className={styles.checksBlockTop}>
          <h3 className={styles.checksTitle}>{firstTitle}</h3>
          <ul className={styles.checksList}>
            {firstList.map((item, index) => {
              return (
                <li className={styles.checksLi} key={index}>
                  {item.text}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.checksBlockBottom}>
          <h3 className={styles.checksTitle}>{secondTitle}</h3>
          <ul className={styles.checksList}>
            {secondList.map((item, index) => {
              return (
                <li className={styles.checksLi} key={index}>
                  {item.text}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default InfoChecks;
