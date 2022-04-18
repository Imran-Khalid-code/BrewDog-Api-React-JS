import React, { useState } from 'react';
import Favourites from '.';
import styles from './Favourites.module.scss';

const Favourites = () => {
	const [favourites, setFavourites] = useState(
		beer.filter((beer) => beer.isFav)
	);
	//remove any selected options depending on user choice
	const removeFromFav = (beer) => {
		beer.isFav = false;
		setFavourites(beer.filter((beer) => beer.isFav));
	};

	const getFavourites = favourites.length ? (
		<CardList beer={favourites} toggleFav={removeFromFav} />
	) : (
		<FeedbackPanel
			header="No favourites"
			text="Try returning to dahsboard and searching for your drink of choice"
		/>
	);

	return <section className={styles.Favourites}>{getFavourites}</section>;
};

export default Favourites;
