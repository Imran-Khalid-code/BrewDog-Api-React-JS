import React from 'react';
import CardList from './CardList';
import { shallow } from 'enzyme';

import beer from '../../data/beers';
// import Card from '../Card';

describe('CardList tests', () => {
	let component;

	beforeEach(() => {
		component = shallow(<CardList beer={beer} />);
	});

	it('should render', () => {
		expect(component).toBeTruthy();
	});

	// it('should render the correct number of Card components', () => {
	// 	const numberOfBeers = beer.length;
	// 	const numberOfRenderedBeers = component.find(Card).length;

	// 	expect(numberOfBeers).toEqual(numberOfRenderedBeers);
	// });
});
