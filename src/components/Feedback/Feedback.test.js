import React from 'react';
import Feedback from './Feedback';
import { shallow } from 'enzyme';

describe('Feedback tests', () => {
	let component;

	beforeEach(() => {
		component = shallow(<Feedback />);
	});

	it('should render', () => {
		expect(component).toBeTruthy();
	});
});
