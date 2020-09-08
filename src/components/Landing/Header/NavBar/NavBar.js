import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
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

const NavBar = () => {
	return (
		<div className={styles.navBar}>
			<div className={styles.container}>
			<nav className={styles.navBarMenu}>
				{
					menuItems.map((item, key) => {
						return <MenuItem text={item.text} key={key}/>;
					})
				}
			</nav>
			</div>
		</div>
	);
};

export default NavBar;
