import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import styles from './search.module.scss';

const Search = () => {
	const [address, setAddress] = useState();
	const history = useHistory();
	return (
		<div className={styles.searchBlock}>
			<input type="text" placeholder="Введите адрес..." className={styles.searchInput} onChange={(event) => setAddress(event.target.value)}/>
			<button className={styles.searchBtn} onClick={() => history.push({
				pathname: '/search',
				state: { searchAddress: address }
			})}></button>
		</div>
	);
};

export default Search;
