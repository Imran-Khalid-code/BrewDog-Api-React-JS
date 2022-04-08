import { useState, useEffect } from 'react';
import styles from './App.module.scss';
import NavBar from './components/NavBar';
import CardFront from './components/CardFront';

const App = () => {
	const [beers, setBeers] = useState([]);
	const [highestABV, setHighestABV] = useState(false);
	const [classic, setClassic] = useState(false);
	const [ph, setHighPh] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearchInput = (e) => {
		setSearchTerm(e.target.value);
	};
	// const handleSearchAcidity = (e) => {
	// 	setHighPh(!ph < 4);
	// };
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


	// useEffect(() => {
	// const getPh = beers.map((beer) => beer.ph);
	//  setHighPh(getPh)
	// }, [beers]);
	return (
		<>
			{/* <Dashboard /> */}
			<section className={styles.nav}>
				<NavBar
					handleSearchInput={handleSearchInput}
					handleSearchAbv={handleSearchAbv}
					// handleSearchAcidity={handleSearchAcidity}
					handleSearchClassic={handleSearchClassic}
				/>
			</section>
			<section className={styles.content}>
				{beers.map((beer) => {
					return <p key={beer.id}>{beer.name}</p>;
				})}
			</section>
			<section>
			<h2>Acidity</h2>
			<ul>{ph.map((p) => {
              return <li>{p < 4}</li>;
            })}
          </ul>
		</section>
		</>
	);
};

export default App;
