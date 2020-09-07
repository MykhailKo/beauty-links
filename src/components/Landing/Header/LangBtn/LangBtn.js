import React from 'react';
import styles from './lang-btn.module.css';

const LangBtn = ({ langCode, active }) => {
	return (
		<div className={styles.langBtn} style={active ? { color: '#000' } : { color: '#555' }}>
			{langCode}
		</div>
	);
};

export default LangBtn;
