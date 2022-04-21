import React, { useState } from 'react';
import styles from './Card.module.scss';
import CardFront from '../CardFront';
import CardBack from '../CardBack';

const Card = (props) => {
	const [isFaceDown, setIsFaceDown, handleFavourites] = useState(false);

	const { beer, toggleFav } = props;
	const flipStyles = isFaceDown ? styles.faceDown : '';

	return (
		<section
			className={`${styles.beerCard} ${flipStyles}`}
			onClick={() => setIsFaceDown(!isFaceDown)}
		>
			<div className={styles.front}>
				<CardFront beer={beer} handleFavourites={handleFavourites} />
			</div>
			<div className={styles.back}>
				<CardBack beer={beer} toggleFav={toggleFav} />
			</div>
		</section>
	);
};

export default Card;
