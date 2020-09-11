import React from 'react';

import RegTitle from '../RegTitle/RegTitle';
import RegSubTitle from '../RegSubTitle/RegSubTitle';

import styles from 'RegPersData.module.scss';

const RegPersData = () => {
  return(
    <div>
      <RegTitle text={'Укажите свои личные данные'} />
      <RegSubTitle text={'Эти данные будут отображены в вашем профиле мастера.'} />
    </div>
  )
}

export default RegPersData