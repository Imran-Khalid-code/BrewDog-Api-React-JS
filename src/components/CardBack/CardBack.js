import React from 'react';
import styles from './CardBack.module.scss';

const CardBack = (props) => {
	const { description } = props.beer;

	const shortenInstructions = (instructions) =>
		instructions.length < 300
			? instructions
			: instructions.substring(0, 200) + '...';

	return (
		<div className={styles.beerCard}>
			<section className={styles.beerProfile}>
				<h3>Description</h3>
				<p>{shortenInstructions(description)}</p>
			</section>
		</div>
	);
};

export default CardBack;
