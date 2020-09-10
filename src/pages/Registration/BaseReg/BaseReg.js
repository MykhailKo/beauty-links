import React from 'react';

import ShBox from '../../../components/ShBox/ShBox';
import RegTitle from '../RegTitle/RegTitle';
import Button from '../../../components/Button/Button';
import RegInput from '../../../components/RegInput/RegInput';
import CheckBox from '../../../components/CheckBox/CheckBox';

import validateForm from '../validateForm';

import styles from './BaseReg.module.scss';

const BaseReg = () => {
  return(
      <ShBox padding={'2em 0'}>
        <RegTitle text={'Регистрация нового пользователя'} />
        <form className={styles.baseRegForm} id={'baseRegForm'} >
          <RegInput type={'email'} label={'E-mail'} name={'email'} required={true} />
          <RegInput type={'password'} label={'Пароль'} name={'password'} required={true} />
          <RegInput type={'password'} label={'Подтвердите пароль'} name={'passwordConf'} required={true} />
          <div className={styles.confPols}>
            <CheckBox id={'politics'} required={true} />
            <span className={styles.confPolsDesc}>
              Подтверждаю, что ознакомился и принимаю условия <a href='#'>политики конфиденциальности</a>
            </span>
          </div>
          <Button text={'Регистрация'} onClick={() => { 
            if(validateForm('baseRegForm')) alert('Valid');
          }}/>
        </form>
        <div className={styles.loginMes}>
          Уже есть аккаунт? <a href="#">Войдите.</a>
        </div>
      </ShBox>
  )
}

export default BaseReg