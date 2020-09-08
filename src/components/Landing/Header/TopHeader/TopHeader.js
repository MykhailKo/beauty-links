import React from 'react';

import Search from '../Search/Search';
import Logo from '../Logo/Logo';
import PopUpBtn from '../PopUpBtn/PopUpBtn';
import Registration from '../Registration/Registration';
import LanguageBlock from '../LanguageBlock/LanguageBlock';
import ContactBtn from '../ContactBtn/ContactBtn';

import styles from './top-header.module.scss';

const TopHeader = () => {
	return (
		<div className={styles.topHeader}>
			<div className={styles.container}>
				<Logo/>
				<Search/>
				<PopUpBtn/>
				<Registration/>
				<LanguageBlock/>
				<ContactBtn/>
			</div>
		</div>
	);
};

export default TopHeader;
