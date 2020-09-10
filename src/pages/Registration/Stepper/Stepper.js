import React, {useState} from 'react';

import Button from '../../../components/Button/Button';
import ShBox from '../../../components/ShBox/ShBox';

import styles from './Stepper.module.scss';

const steps = [
  {text: 'Регистрация'},
  {text: 'Услуги'},
  {text: 'Локация'},
  {text: 'Доступность'},
  {text: 'Опыт и навыки'},
  {text: 'Завершение регистрации'},
]

const Stepper = ({ nextStep }) => {

  const [step, setStep] = useState(1)

  return(
    <ShBox padding={'3em 3em'}>
      <ul className={styles.stepsContainer}>
        {steps.map((item, index) => {
          return ( 
            <li className={styles.stepBlock} key={index}>
              <div 
                className={styles.stepCircle} 
                style={index + 1 < step ? {backgroundColor: 'var(--main-blue)', backgroundImage: 'url("/assets/img/icons/check.png")'} : {backgroundColor: 'var(--pale-blue)'}}
              >{index + 1 >= step && index+1}</div>
              <div className={styles.stepDesc}>{item.text}</div>
            </li>
          )
        })}
      </ul>
      <div className={styles.stepperContent}></div>
      <Button text={'Продолжить'} onClick={() => {
        step < 6 ? setStep(step+1) : nextStep(4)
      }}/>
    </ShBox>
  )
}

export default Stepper