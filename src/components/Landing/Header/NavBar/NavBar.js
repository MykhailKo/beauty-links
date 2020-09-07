import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import styles from './nav-bar.module.css';

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
<<<<<<< HEAD
    return(
        <div className={styles.navBar}>
            <ul className={styles.navBarMenu}>
                {
                    menuItems.map((item, key) => {
                        return <MenuItem text={item.text} key={key}/>
                    })
                }
            </ul>
        </div>
    )
}
=======
	return (
		<div className={styles.navBar}>
			<ul className={styles.navBarMenu}>
				{
					menuItems.map(item => {
						return <MenuItem text={item.text}/>;
					})
				}
			</ul>
		</div>
	);
};
>>>>>>> 9f05ceb8e18d87085403534df45dbb2c34643439

export default NavBar;
