import { describe, expect, test } from 'vitest';
import Quote from './Quote.svelte';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';

describe('Quote', () => {
	test('should display "first quote" quote', () => {
		render(Quote, { quote: 'first quote' });

		const quote = page.getByText(/first quote/i);
		expect(quote).toBeInTheDocument();
	});

	test('should display "second quote" quote', () => {
		render(Quote, { quote: 'second quote' });

		const quote = page.getByText(/second quote/i);
		expect(quote).toBeInTheDocument();
	});

	test('should display "third quote" quote', () => {
		render(Quote, { quote: 'third quote' });

		const quote = page.getByText(/third quote/i);
		expect(quote).toBeInTheDocument();
	});
});
