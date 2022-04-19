import React from 'react';
import NavBar from './NavBar';
import { shallow } from 'enzyme';

import beer from '../../data/beers';
describe('NavBar tests', () => {
	let component;
	let testBeer;

	beforeEach(() => {
		testBeer = beer[0];
		component = shallow(<NavBar beer={testBeer} />);
	});

	it('should render', () => {
		expect(component).toBeTruthy();
	});
});
