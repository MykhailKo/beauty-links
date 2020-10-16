import React from 'react';
import styles from './lang-btn.module.scss';

const LangBtn = ({ langCode, active=false }) => {
	return (
		<div className={active ? styles.langBtnActive : styles.langBtn}>
			{langCode}
		</div>
	);
};

export default LangBtn;
