import React from 'react';
import { Router } from '@reach/router';

import Dashboard from '../Dashboard';
import NotFound from '../../components/NotFound';
// import Favourites from '../../components/favourites';

const Routes = () => {
	return (
		<Router>
			<Dashboard path="/" />
			{/* <Favourites path="favourites" /> */}
			<NotFound default />
		</Router>
	);
};

export default Routes;
