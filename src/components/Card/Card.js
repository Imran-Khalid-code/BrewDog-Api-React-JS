import React, { useState } from 'react';
import styles from './Card.module.scss';
import CardFront from '../CardFront';
import CardBack from '../CardBack';

const Card = (props) => {
	const [isFaceDown, setIsFaceDown] = useState(false);

	const { beer, toggleFav } = props;
	const flipStyles = isFaceDown ? styles.faceDown : '';

	return (
		<section
			className={`${styles.BeerCard} ${flipStyles}`}
			onClick={() => setIsFaceDown(!isFaceDown)}
		>
			<div className={styles.front}>
				<CardFront beer={beer} />
			</div>
			<div className={styles.back}>
				<CardBack beer={beer} toggleFav={toggleFav} />
			</div>
		</section>
	);
};

export default Card;