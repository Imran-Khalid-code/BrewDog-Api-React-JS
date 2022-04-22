import React from 'react';
import { Router } from '@reach/router';

import Dashboard from '../Dashboard';
import NotFound from '../../components/NotFound';

const Routes = () => {
	return (
		<Router>
			<Dashboard path="/" />
			<NotFound default />
		</Router>
	);
};

export default Routes;
