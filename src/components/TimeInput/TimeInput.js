import React from 'react';

import styles from './TimeInput.module.scss';

const TimeInput = ({label, id, required=false}) => {
  return(
    <div className={styles.timeWrap}>
      <label for={id} className={styles.timeLabel}>{label}</label>
      {required ? 
        (<input 
        type={'time'} 
        min={'09:00'} 
        max={'21:00'} 
        id={id}
        name={id}
        className={styles.timeInput}
        required
        />) :
        (<input 
        type={'time'} 
        min={'09:00'} 
        max={'21:00'} 
        id={id}
        name={id}
        className={styles.timeInput}
      />
        ) 
      }
    </div>
  )
}

export default TimeInput