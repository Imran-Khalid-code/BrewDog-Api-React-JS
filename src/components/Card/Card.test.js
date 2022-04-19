import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card tests', () => {
	let component;

	beforeEach(() => {
		component = shallow(<Card />);
	});

	it('should render', () => {
		expect(component).toBeTruthy();
	});
});
