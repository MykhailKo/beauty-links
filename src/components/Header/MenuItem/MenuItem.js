import React from 'react';
import styles from './menu-item.module.scss';

const TopHeader = ({ text }) => {
  return (
    <a href="#" className={styles.menuItem}>
      {text}
    </a>
  );
};

export default TopHeader;
