import React from 'react';
import Dashboard from './Dashboard';
import { shallow } from 'enzyme';

import beer from '../../data/beers';

describe('Dashboard tests', () => {
	let component;
	let testBeer;

	beforeEach(() => {
		testBeer = beer[0];
		component = shallow(<Dashboard beer={testBeer} />);
	});

	it('should render', () => {
		expect(component).toBeTruthy();
	});
});
