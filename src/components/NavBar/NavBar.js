import React from 'react';
import styles from './NavBar.module.scss';
import Searchbox from '../Searchbox/Searchbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/free-solid-svg-icons';

import { Link } from '@reach/router';

const NavBar = (props) => {
	const {
		handleSearchInput,
		handleSearchAbv,
		handleSearchAcidity,
		handleSearchClassic,
	} = props;

	return (
		<nav className={styles.navFlex}>
			<div>
				<label>
					<h5>High ABV(+6.0%)</h5>
					<input type="checkbox" onClick={handleSearchAbv} />
				</label>
			</div>

			<div>
				<label>
					<h5>Classic Range</h5>
					<input type="checkbox" onClick={handleSearchClassic} />
				</label>
			</div>

			<div>
				<label>
					<h5>Acidic Range</h5>{' '}
					<input type="checkbox" onClick={handleSearchAcidity} />
				</label>
			</div>

			<div>
				<Searchbox
					placeholder="Search for beers..."
					handleSearchInput={handleSearchInput}
				/>
			</div>

			<div>
				<Link to="Favourites">
					<FontAwesomeIcon
						icon={faBeer}
						color="black"
						fontSize={'30px'}
					></FontAwesomeIcon>
				</Link>
			</div>
		</nav>
	);
};

export default NavBar;
