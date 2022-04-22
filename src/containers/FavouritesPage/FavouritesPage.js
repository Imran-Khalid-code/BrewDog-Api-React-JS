import React from 'react';
import CardFront from '../../components/CardFront';

const FavouritesPage = (props) => {
	const favourites = props.location.state.likedBeers;

	const favouritesList = favourites.map((beer) => {
		return <CardFront key={beer.id} beer={beer} />;
	});

	return <div className={styles.FavouritesPage}>{favouritesList}</div>;
};

export default FavouritesPage;
