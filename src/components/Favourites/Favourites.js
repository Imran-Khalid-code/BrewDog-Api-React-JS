import React, { useState } from 'react';
import Favourites from '.';
import styles from './Favourites.module.scss';

const Favourites = () => {
	const [favourites, setFavourites, handleFavourites] = useState(
		beer.filter((beer) => beer.isFav)
	);

	const removeFromFav = (beer) => {
		beer.isFav = false;
		setFavourites(beer.filter((beer) => beer.isFav));
	};

	const getFavourites = favourites.length ? (
		<Favourites beer={handleFavourites} toggleFav={removeFromFav} />
	) : (
		''
	);

	return <section className={styles.Favourites}>{getFavourites}</section>;
};

export default Favourites;
