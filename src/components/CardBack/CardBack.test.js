import React from 'react';
import CardBack from './CardBack';
import { shallow } from 'enzyme';

import beer from '../../data/beers';

describe('CardBack tests', () => {
	let component;
	let testBeer;

	beforeEach(() => {
		testBeer = beer[0];
		component = shallow(<CardBack beer={testBeer} />);
	});

	it('should render', () => {
		expect(component).toBeTruthy();
	});
});
