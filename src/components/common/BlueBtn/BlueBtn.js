import React from 'react';
import styles from './blue-btn.module.scss';

const BlueBtn = ({ text, filled=true }) => {
	return (
		<button className={filled ? styles.filledBtn : styles.plainBtn}>
			{text}
		</button>
	);
};

export default BlueBtn;
