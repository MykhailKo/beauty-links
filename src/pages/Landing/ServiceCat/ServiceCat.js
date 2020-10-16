import React from 'react';

import styles from './ServiceCat.module.scss';

const ServiceCat = ({ imgUrl, text }) => {
  return(
    <div className={styles.serviceCatBlock}>
      <div className={styles.serviceCatImg} style={{backgroundImage: `url(${imgUrl})`}}></div>
      <h4 className={styles.serviceCatTitle}>{text}</h4>
    </div>
  )
}

export default ServiceCat