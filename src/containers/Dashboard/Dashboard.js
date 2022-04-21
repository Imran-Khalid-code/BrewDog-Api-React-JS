import { useState, useEffect } from 'react';
import React from 'react';
import styles from './Dashboard.module.scss';
import NavBar from '../../components/NavBar';
import Card from '../../components/Card';

const Dashboard = () => {
	const [beers, setBeers] = useState([]);
	const [highestABV, setHighestABV] = useState(false);
	const [classic, setClassic] = useState(false);
	// This state toggles the acidity checkbox in navbar from true/false with each click.
	const [beersWithHighPh, setBeersWithHighPh] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [favouritedBeers, setFavouritedBeers] = useState([]);

	const handleFavourites = (beerObj) => {
		// This handleFavourites function will be passed as a reference to the CardFront component to add that
		// beerObj to the favouritedBeers array
		const favouritedBeersList = [...favouritedBeers, beerObj];
		setFavouritedBeers(favouritedBeersList);
	};

	const handleSearchInput = (e) => {
		setSearchTerm(e.target.value);
	};
	const handleSearchAcidity = (e) => {
		setBeersWithHighPh(!beersWithHighPh);
	};
	const handleSearchClassic = (e) => {
		setClassic(!classic);
	};
	const handleSearchAbv = (e) => {
		setHighestABV(!highestABV);
	};

	const searchBeersByName = searchTerm ? `?beer_name=${searchTerm}` : '';

	const abv = highestABV ? `?abv_gt=18` : '';

	const classicRange = classic ? `?brewed_before=01-2008` : '';

	const url = `https://api.punkapi.com/v2/beers${searchBeersByName}${abv}${classicRange}`;

	const getBeers = () => {
		fetch(url)
			.then((response) => response.json())
			.then((response) => setBeers(response));
	};
	useEffect(() => {
		getBeers();
	}, [searchTerm, highestABV, classic]);

	const filterBeersByPh = beers.filter((beer) => {
		return beer.ph < 4;
	});

	const renderBeersWithHighPh = filterBeersByPh.map((beer) => {
		//console.log(beer);
		return <Card key={beer.id} beer={beer} />;
	});

	const renderAllBeers = beers.map((beer) => {
		return <Card key={beer.id} beer={beer} />;
	});

	return (
		<>
			<section className={styles.nav}>
				<NavBar
					handleSearchInput={handleSearchInput}
					handleSearchAbv={handleSearchAbv}
					handleSearchAcidity={handleSearchAcidity}
					handleSearchClassic={handleSearchClassic}
					handleFavourites={handleFavourites}
				/>
			</section>
			<section className={styles.beerCard}>
				{beersWithHighPh ? renderBeersWithHighPh : renderAllBeers}
			</section>
		</>
	);
};

export default Dashboard;
