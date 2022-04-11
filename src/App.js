import { useState, useEffect } from 'react';
import styles from './App.module.scss';
import NavBar from './components/NavBar';
import CardFront from './components/CardFront';

const App = () => {
	const [beers, setBeers] = useState([]);
	const [highestABV, setHighestABV] = useState(false);
	const [classic, setClassic] = useState(false);
	// This state toggles the acidity checkbox in navbar from true/false with each click.
	const [beersWithHighPh, setBeersWithHighPh] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');

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

	//console.log(beers);

	const filterBeersByPh = beers.filter((beer) => {
		return beer.ph < 4;
	});

	const renderBeersWithHighPh = filterBeersByPh.map((beer) => {
		//console.log(beer);
		return <p key={beer.id}>{beer.name}</p>;
	});

	const renderAllBeers = beers.map((beer) => {
		return <p key={beer.id}>{beer.name}</p>;
	});

	//console.log(filterBeersByPh);

	return (
		<>
			{/* <Dashboard /> */}
			<section className={styles.nav}>
				<NavBar
					handleSearchInput={handleSearchInput}
					handleSearchAbv={handleSearchAbv}
					handleSearchAcidity={handleSearchAcidity}
					handleSearchClassic={handleSearchClassic}
				/>
			</section>
			<section className={styles.content}>
				{beersWithHighPh ? renderBeersWithHighPh : renderAllBeers}
				<CardFront beer={beers} />
			</section>
		</>
	);
};

export default App;
