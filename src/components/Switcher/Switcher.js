import React from 'react';

import styles from './Switcher.module.scss';

const Switch = ({state, switchState}) => {  
  return(
    <div className={styles.switchBody} 
    style={state ? {backgroundColor: 'var(--main-blue)'} : {backgroundColor: 'rgba(120, 120, 128, 0.16)'}}
    >
      <div className={styles.switcher} onClick={() => switchState(!state)} 
      style={state ? {transform: 'translateX(75%)'} : {transform: 'translateX(0)'}}
      ></div>
    </div>
  )
}

export default Switch