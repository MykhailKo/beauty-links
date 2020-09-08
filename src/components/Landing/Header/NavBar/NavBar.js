import React from 'react';

import MenuItem from '../MenuItem/MenuItem';
import LanguageBlock from '../LanguageBlock/LanguageBlock';

import useWindowSize from '../../../../hooks/useWindowSize';

import widths from '../../../../assets/scss/_widths.scss';
import styles from './nav-bar.module.scss';

const menuItems = [
	{ text: 'Уход за волосами' },
	{ text: 'Уход за ногтями' },
	{ text: 'Косметолог' },
	{ text: 'Макияж' },
	{ text: 'Брови и ресницы' },
	{ text: 'Уход за телом' },
	{ text: 'Барберы' },
	{ text: 'Удаление волос' }
];

const NavBar = ({ open }) => {

	const [width] = useWindowSize();

	return (
		<div className={styles.navBar} style={open ? {transform: 'translateX(-100%)'} : {transform: 'translateX(0)'}}>
			<div className={styles.container}>
			<nav className={styles.navBarMenu}>
				{
					menuItems.map((item, key) => {
						return <MenuItem text={item.text} key={key}/>;
					})
				}
			</nav>
			</div>
			{width < parseInt(widths.break_md) && <LanguageBlock />}
		</div>
	);
};

export default NavBar;
