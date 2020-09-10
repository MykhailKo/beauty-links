import React from 'react';

import styles from './RegTitle.module.scss';

const RegTitle = ({text}) => {
  return(
    <h3 className={styles.regTitle}>{text}</h3>
  )
}

export default RegTitle
