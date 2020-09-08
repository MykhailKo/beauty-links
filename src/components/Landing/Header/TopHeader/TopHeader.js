import React from 'react';

import Search from '../Search/Search';
import Logo from '../Logo/Logo';
import PopUpBtn from '../PopUpBtn/PopUpBtn';
import Registration from '../Registration/Registration';
import LanguageBlock from '../LanguageBlock/LanguageBlock';
import ContactBtn from '../ContactBtn/ContactBtn';
import useWindowSize from '../../../../hooks/useWindowSize';

import widths from '../../../../assets/scss/_widths.scss';
import styles from './top-header.module.scss';

const TopHeader = () => {

	const [width] = useWindowSize();

	return (
		<div className={styles.topHeader}>
			<div className={styles.container}>
				<Logo/>
				<Search/>
				<PopUpBtn/>
				<Registration/>
				{width >= parseInt(widths.break_md) && <LanguageBlock/>}
				<ContactBtn/>
			</div>
		</div>
	);
};

export default TopHeader;
