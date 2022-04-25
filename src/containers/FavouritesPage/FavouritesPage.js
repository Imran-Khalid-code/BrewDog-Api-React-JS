import React from 'react';
import CardFront from '../../components/CardFront';
import styles from './FavouritesPage';

const FavouritesPage = (props) => {
	console.log(props);
	const favourites = props.location.state.likedBeers;

	const favouritesList = favourites.map((beer) => {
		return <CardFront key={beer.id} beer={beer} />;
	});

	return (
		<section>
			<div className={styles.favouritesPage}>{favouritesList}</div>
		</section>
	);
};

export default FavouritesPage;
