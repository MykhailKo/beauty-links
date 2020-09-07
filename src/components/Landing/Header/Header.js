import React from 'react';
import TopHeader from './TopHeader/TopHeader';
import NavBar from './NavBar/NavBar';
import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <TopHeader />
            <NavBar />
        </header>
    )
}

export default Header;