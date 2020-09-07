import React from 'react';

import style from './CardsAndCopyrightColumn.module.scss';

const CardsAndCopyrightColumn = () => {
	return (
		<div className={style.Column}>
			<div>
				<img src={'/assets/img/mastercard.png'} alt="mastercard"/>
			</div>
			<div>
				<img src={'/assets/img/visa.png'} alt="mastercard"/>
			</div>
			<div className={style.Copyright}>© 2020 Beautylinks</div>
		</div>
	);
};

export default CardsAndCopyrightColumn;
