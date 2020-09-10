import React from 'react';

import styles from './ShBox.module.scss'

const ShBox = (props) => {
  return(
    <div className={styles.shBox} style={{padding: props.padding}}>
      {props.children}
    </div>
  )
}

export default ShBox