import React from 'react';

import SecTitle from '../SecTitle/SecTitle';

import styles from './InfoChecks.module.css';

const InfoChecks = ({ secTitle, firstTitle, secondTitle, firstList, secondList }) => {
  return(
    <section className={styles.checksSec}>
      <SecTitle title={secTitle} />
      <div className={styles.checksBlockTop}>
        <h3 className={styles.checksTitle}>{firstTitle}</h3>
        <ul className={styles.checksList}>
          {
            firstList.map((item, key) => {
              return <li className={styles.checksLi}>{item.text}</li>
            })
          }
        </ul>
      </div>
      <div className={styles.checksBlockBottom}>
        <h3 className={styles.checksTitle}>{secondTitle}</h3>
        <ul className={styles.checksList}>
          {
            secondList.map((item, key) => {
              return <li className={styles.checksLi}>{item.text}</li>
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default InfoChecks