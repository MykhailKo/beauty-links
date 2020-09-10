import React from 'react';

import ShBox from '../common/ShBox/ShBox';

import styles from './Registration.module.scss';

const Registration = () => {
  return(
    <main className={'container'}>
      <div className={styles.regWrap}>
        <ShBox>
          <h1>Registartion</h1>
        </ShBox>
      </div>
    </main>
  )
}

export default Registration