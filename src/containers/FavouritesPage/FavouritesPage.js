import React from 'react';
import Card from '../../components/Card';
import NavBar from '../../components/NavBar';
import styles from './FavouritesPage.module.scss';

const FavouritesPage = () => {
	const [favouritedBeers, setFavouritedBeers] = useState(
		beer.filter((beer) => beer.isFav)
	);

	const removeFromFav = (beer) => {
		beer.isFav = false;
		setFavouritedBeers(beer.filter((beer) => beer.isFav));
	};

	const setFav = (
		<FavouritesPage beer={favouritedBeers} toggleFav={removeFromFav} />
	);

	return <section className={styles.FavouritesPage}>{setFav}</section>;
};

export default FavouritesPage;
