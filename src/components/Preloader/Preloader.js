import React from 'react'

import styles from './Preloader.module.scss';

const Preloader = () => {
  return(
    <div className={'container'}>
      <div className={styles.preloaderWrap}>
        <div className={styles.preloader}></div>
      </div>
    </div>
  )
}

export default Preloader