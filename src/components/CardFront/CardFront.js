import styles from './CardFront.module.scss';
import React from 'react';
import { Link } from '@reach/router';

const CardFront = (props) => {
	const { name, tagline, handleFavourites } = props.beer;

	return (
		<div className={styles.beerCard}>
			<section className={styles.beerProfile}>
				<div>
					{<img src={'/images/teacup-gb74ecdeec_640.jpg'} alt="" />}
					<h2 className={styles.title}>{name}</h2>
				</div>
			</section>
			<section className={styles.beerProfile}>
				<h3>{tagline}</h3>
				<Link to="Favourites" style={{ textDecoration: 'none' }}>
					<button
						className={styles.button}
						onClick={() => handleFavourites(props.beer)}
					>
						Add To Favourites
					</button>
				</Link>
			</section>
		</div>
	);
};

export default CardFront;
