import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Searchbox from './Searchbox';

describe('Input Component', () => {
	it('rendered input', () => {
		const { getByTestId } = render(<Searchbox searchTerm={false} />);
		const input = getByTestId('searchBar');
		expect(input).toBeTruthy();
	});
});

it('rendered h1', () => {
	const { getByTestId } = render(<Searchbox searchTerm={true} />);
	const h1 = getByTestId('Search');
	expect(h1).toBeTruthy();
});

it('change on input', async () => {
	await act(async () => {
		const { getByTestId } = render(<Searchbox searchTerm={false} />);
		const input = getByTestId('searchBar');
		//
		const selection = '';
		await fireEvent.change(input, { target: { value: selection } });
		expect(input.innerHTML).toBe(selection);
	});
});
