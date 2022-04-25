import React from 'react';
import { Router } from '@reach/router';

import Dashboard from '../Dashboard';
import NotFound from '../../components/NotFound';
import FavouritesPage from '../FavouritesPage/FavouritesPage';

const Routes = () => {
	return (
		<Router>
			<Dashboard path="/" />
			<FavouritesPage path="/favourites" />
			<NotFound default />
		</Router>
	);
};

export default Routes;
