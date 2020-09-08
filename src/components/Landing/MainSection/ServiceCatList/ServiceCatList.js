import React from 'react';

import ServiceCat from '../ServiceCat/ServiceCat';
import SecTitle from '../SecTitle/SecTitle';
import BlueBtn from '../../../common/BlueBtn/BlueBtn';

import styles from './ServiceCatList.module.scss';

const services = [
  {text: 'Уход за волосами', imgUrl: '/assets/img/services/hair.png'},
  {text: 'Уход за ногтями', imgUrl: '/assets/img/services/nails.png'},
  {text: 'Косметолог', imgUrl: '/assets/img/services/cosmetologist.png'},
  {text: 'Макияж', imgUrl: '/assets/img/services/makeup.png'},
  {text: 'Брови и ресницы', imgUrl: '/assets/img/services/brows-lashes.png'},
  {text: 'Уход за телом', imgUrl: '/assets/img/services/body-care.png'},
  {text: 'Барберы', imgUrl: '/assets/img/services/barber.png'},
  {text: 'Удаление волос', imgUrl: '/assets/img/services/depilation.png'}
]

const ServiceCatList = ({ secTitle }) => {
  return(
    <div className={'container'}>
      <SecTitle title={secTitle} />
      <section className={styles.serviceSec}>
        <ul className={styles.serviceList}>
        {
          services.map((service, key) => {
            return <ServiceCat text={service.text} imgUrl={service.imgUrl} key={key}/>
          })
        }
        </ul>
        <BlueBtn text={'Посмтореть все услуги'} />
      </section>
    </div>
  )
}

export default ServiceCatList