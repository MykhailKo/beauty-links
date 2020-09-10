import React from 'react';

import styles from './Select.module.scss';

const Select = ({label, options, id, error=null, required=false}) => {
  return(
    <div className={styles.selectWrap}>
      <label for={id} className={styles.selectLabel}>{label}</label>
      {
        required ? 
        <select id={id} name={id} className={styles.select} required>
          {options.map((option, key) => {
          return <option key={key}>{option.text}</option>
        })}
      </select> :
        <select id={id} name={id} className={styles.select}>
          {options.map((option, key) => {
          return <option key={key}>{option.text}</option>
        })}
      </select>
      }
      {error && <span className={styles.selectEerror}>{error}</span>}
    </div>
  )
}

export default Select