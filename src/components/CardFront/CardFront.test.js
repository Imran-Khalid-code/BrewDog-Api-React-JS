import React from 'react';
import CardFront from './CardFront';
import { shallow } from 'enzyme';

describe('CardFront tests', () => {
	let component;

	beforeEach(() => {
		component = shallow(<CardFront beer={name} />);
	});

	it('should render', () => {
		expect(component).toBeTruthy();
	});
});
