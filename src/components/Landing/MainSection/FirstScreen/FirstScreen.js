import React from 'react';
import styles from './first-screen.module.css';
import BlueBtn from '../../../common/BlueBtn/BlueBtn';
import BlueInput from '../../../common/BlueInput/BlueInput';

const FirstScreen = () => {
<<<<<<< HEAD
    return(
        <div className={'container'}>
        <section className={styles.firstScreenSec}> 
            <div className={styles.titleBlock}>
                <h1 className={styles.mainTitle}>Мастера красоты и здоровья вашего города</h1>
                <h2 className={styles.secondaryTitle}>Найдите ближайшего специалиста всего в 3 клика</h2>
            </div>
            <form className={styles.searchForm}>
                <BlueInput placeholder={'Введите адрес'} />
                <BlueInput placeholder={'Выберете услугу'} />
                <BlueBtn text={'Поиск'} />
            </form>
            <div className={styles.imageBlock}>
                <div className={styles.girlImg}></div>
            </div>
        </section>
        </div>
    )
}
=======
	return (
		<section className={styles.firstScreenSec}>
			<div className={styles.titleBlock}>
				<h1 className={styles.mainTitle}>Мастера красоты и здоровья вашего города</h1>
				<h2 className={styles.secondaryTitle}>Найдите ближайшего специалиста всего в 3 клика</h2>
			</div>
			<form className={styles.searchForm}>
				<BlueInput placeholder={'Введите адрес'}/>
				<BlueInput placeholder={'Выберете услугу'}/>
				<BlueBtn text={'Поиск'}/>
			</form>
			<div className={styles.imageBlock}>
				<div className={styles.girlImg}></div>
			</div>
		</section>
	);
};
>>>>>>> f50e253315785527ab57d23eaf3fc32683be169d

export default FirstScreen;
