import { render } from '@testing-library/react';

import Searchbox from './Searchbox';
import React from 'react';

import { shallow } from 'enzyme';

import beer from '../../data/beers';
describe('Searchbox tests', () => {
	let component;
	let testBeer;

	beforeEach(() => {
		testBeer = beer[0];
		component = shallow(<Searchbox beer={testBeer} />);
	});

	it('should render', () => {
		expect(component).toBeTruthy();
	});
});

describe('Input Component', () => {
	it('rendered input', () => {
		const { getByTestId } = render(<Searchbox searchTerm={false} />);
		const input = getByTestId('searchBar');
		expect(input).toBeTruthy();
	});
});
