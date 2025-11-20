import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';
import Number from './Number.svelte';

describe('Number component', () => {
	test('should display "1"', () => {
		render(Number, { number: '1' });

		const number = page.getByText(/1/i);
		expect(number).toBeInTheDocument();
	});

	test('should display "2"', () => {
		render(Number, { number: '2' });

		const number = page.getByText(/2/i);
		expect(number).toBeInTheDocument();
	});

	test('should display "3"', () => {
		render(Number, { number: '3' });

		const number = page.getByText(/3/i);
		expect(number).toBeInTheDocument();
	});
});
