import React from 'react';

import styles from './SecTitle.module.css';

const SecTitle = ({ title }) => {
	return (
		<div className={'container'}>
			<h2 className={styles.secTitle}>{title}</h2>
		</div>
	);
};

export default SecTitle;
