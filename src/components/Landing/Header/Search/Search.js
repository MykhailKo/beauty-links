import React from 'react';
import styles from './search.module.css';

const Search = () => {
	return (
		<div className={styles.searchBlock}>
			<input type="text" placeholder="Введите адрес..." className={styles.searchInput}/>
			<button className={styles.searchBtn}></button>
		</div>
	);
};

export default Search;
