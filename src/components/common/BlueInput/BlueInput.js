import React from 'react';
import styles from './blue-input.module.css';

const BlueInput = ({ placeholder, type='text' }) => {
    return(
        <input placeholder={placeholder} type={type} className={styles.blueInput} />
    )
}

export default BlueInput