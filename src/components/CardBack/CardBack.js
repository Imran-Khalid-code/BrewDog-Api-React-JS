import { useState } from 'react';
import React from 'react';
import styles from './CardBack.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const CardBack = (props) => {
	const { description } = props.beer;
	const { beer, toggleFav, isFav } = props;
	const [favState, setFavState] = useState(isFav);

	const shortenInstructions = (instructions) =>
		instructions.length < 300
			? instructions
			: instructions.substring(0, 200) + '...';

	const handleFavClick = (e) => {
		e.stopPropagation();
		toggleFav(beer);
		setFavState(!isFav);
	};

	const HeartIcon = favState ? ['faHeart'] : ['faHeart'];

	return (
		<div className={styles.beerCard}>
			<span className={styles.heart} onClick={handleFavClick}></span>
			<FontAwesomeIcon icon={HeartIcon} />
			<section className={styles.beerProfile}>
				<h3>Description</h3>
				<p>{shortenInstructions(description)}</p>
			</section>
		</div>
	);
};

export default CardBack;
