import React, { useState } from 'react';
import styles from './Searchbox.module.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Searchbox = (props) => {
	const { placeholder, handleSearchInput } = props;

	return (
		<div className={styles.search}>
			<input
				type="text"
				data-testid="searchBar"
				placeholder={placeholder}
				onInput={handleSearchInput}
			/>
			<span className={styles.fa}>
				<h1 data-testid="search"></h1>
			</span>
		</div>
	);
};

export default Searchbox;
