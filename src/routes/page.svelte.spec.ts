import { page } from 'vitest/browser';
import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
	test('should render "1", "first quote" and "source one"', async () => {
		render(Page, { number: '1', quote: 'first quote', source: 'source one' });

		const number = page.getByText(/1/i);
		const quote = page.getByText(/first quote/i);
		const source = page.getByText(/source one/i);

		expect(number).toBeInTheDocument();
		expect(quote).toBeInTheDocument();
		expect(source).toBeInTheDocument();
	});

	test('should render "2", "second quote" and "source two"', () => {
		render(Page, { number: '2', quote: 'second quote', source: 'source two' });

		const number = page.getByText(/2/i);
		const quote = page.getByText(/second quote/i);
		const source = page.getByText(/source two/i);

		expect(number).toBeInTheDocument();
		expect(quote).toBeInTheDocument();
		expect(source).toBeInTheDocument();
	});

	test('should render "3", "third quote" and "source third"', () => {
		render(Page, { number: '3', quote: 'third quote', source: 'source three' });

		const number = page.getByText(/3/i);
		const quote = page.getByText(/third quote/i);
		const source = page.getByText(/source three/i);

		expect(number).toBeInTheDocument();
		expect(quote).toBeInTheDocument();
		expect(source).toBeInTheDocument();
	});
});
