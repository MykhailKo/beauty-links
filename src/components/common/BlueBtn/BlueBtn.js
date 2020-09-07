import React from 'react';
import styles from './blue-btn.module.css';

const BlueBtn = ({ text }) => {
    return(
        <button className={styles.blueBtn}>
            {text}
        </button>
    )
}

export default BlueBtn