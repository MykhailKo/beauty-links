import React from 'react';

import styles from './SearchBannerText.module.scss';

const SearchBannerText = ({title, text}) => {
  return(
    <div className={styles.textBlock}>
      <h5 className={styles.textTitle}>{title}</h5>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default SearchBannerText