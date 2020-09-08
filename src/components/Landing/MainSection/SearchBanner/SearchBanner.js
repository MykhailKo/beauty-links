import React from 'react';

import SecTitle from '../SecTitle/SecTitle';
import BlueBtn from '../../../common/BlueBtn/BlueBtn';
import SearchBannerText from '../SearchBannerText/SearchBannerText';

import styles from './SearchBanner.module.scss';

const SearchBanner = ({title}) => {
  return(
    <section className={styles.searchBannerSec}>
      <SecTitle title={title}/>
      <div className={'container'}>
        <div className={styles.searchBannerTextWrap}>
          <SearchBannerText title={'С комфортом у себя дома:'} 
          text={'Любимые услуги от лучших мастеров на дому, не снимая пижамы? С Beautylinks это реально!'} />
          <SearchBannerText title={'В кабинете специалиста/ салоне:'} 
          text={'Нужен релакс и полноценный уход? Найдите кабинет специалиста в своем районе, или по пути на работу/учёбу'} />
        </div>
      </div>
      <BlueBtn text={'Найти специалиста'} />
    </section>
  )
}

export default SearchBanner