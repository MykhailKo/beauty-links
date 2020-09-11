import React from 'react';

import styles from './RegSubTitle.module.scss';

const RegSubTitle = ({text}) => {
  return(
  <h4 className={styles.regSubTitle}>{text}</h4>
  )
}

export default RegSubTitle