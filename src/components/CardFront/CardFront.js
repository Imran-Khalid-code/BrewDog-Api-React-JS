import { useState, useEffect } from 'react';
import styles from './CardFront.module.scss';

const CardFront = (props) => {
	const { beer } = props;

	return (
		<div className={styles.CardFront}>
			<CardFront beer={beer} />
		</div>
	);
};

export default CardFront;
