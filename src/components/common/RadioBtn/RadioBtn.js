import React from 'react';

import styles from './RadioBtn.module.scss';

const RadioBtn = ({name, value, id, label, checked=false}) => {
  return(
  <div className={styles.radioWrap}>
    <label for={id} className={styles.radioLabel}>
      <div 
        className={styles.radioBtn} 
        style={checked ? {backgroundColor: 'var(--main-blue)', backgroundImage: `url('/assets/img/icons/check.png')`} 
        : {backgroundColor: '', backgroundImage: ``}}
      ></div>
      {label}
    </label>
    <input type={'radio'} name={name} value={value} id={id} hidden {...checked && 'checked'}/>
  </div>
  )
}

export default RadioBtn