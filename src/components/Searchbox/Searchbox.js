import React, { useState } from 'react';
import styles from './Searchbox.module.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Searchbox = (props) => {
	const { placeholder, handleSearchInput } = props;

	return (
		<div className={styles.search}>
			{/* {input} */}
			<input
				type="text"
				placeholder={placeholder}
				onInput={handleSearchInput}
			/>
			<span className={styles.fa}>
				<h1>Search</h1>
				{/* <FontAwesomeIcon icon="search" /> */}
			</span>
		</div>
	);
};

export default Searchbox;
