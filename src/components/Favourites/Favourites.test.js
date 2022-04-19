import React from 'react';
import Favourites from './Favourites';
import { shallow } from 'enzyme';
import beer from '../../data/beers';

describe('Favourites tests', () => {
	let component;
	let testBeer;

	beforeEach(() => {
		testBeer = beer[0];
		component = shallow(<Favourites beer={testBeer} />);
	});

	it('should render', () => {
		expect(component).toBeTruthy();
	});
});
