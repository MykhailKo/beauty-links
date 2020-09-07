import React from 'react';
import LangBtn from '../LangBtn/LangBtn';
import styles from './lang.module.css';

const LanguageBlock = () => {
	return (
		<div className={styles.langBlock}>
			<LangBtn langCode={'en'}/>
			<LangBtn langCode={'ukr'}/>
			<LangBtn langCode={'ru'} active={true}/>
		</div>
	);
};

export default LanguageBlock;
