import styles from './CardFront.module.scss';
import React from 'react';

const CardFront = (props) => {
	const { name, tagline, image_url } = props.beer;

	return (
		<div className={styles.beerCard}>
			<section className={styles.beerCard}>
				<img src={image_url} alt={name} />
				<h2>{name}</h2>
			</section>
			<section className={styles.beerProfile}>
				<h3>{tagline}</h3>
			</section>
		</div>
	);
};

export default CardFront;
