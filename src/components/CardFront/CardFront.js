import styles from './CardFront.module.scss';
import React from 'react';

const CardFront = (props) => {
	const { name, tagline } = props.beer;

	return (
		<div className={styles.beerCard}>
			<section className={styles.beerProfile}>
				<div>
					{<img src={'/images/teacup-gb74ecdeec_640.jpg'} alt="" />}
					<h2>{name}</h2>
				</div>
			</section>
			<section className={styles.beerProfile}>
				<h3>{tagline}</h3>
			</section>
		</div>
	);
};

export default CardFront;
