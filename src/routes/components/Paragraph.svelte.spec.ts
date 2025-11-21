import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Paragraph from './Paragraph.svelte';
import { page } from 'vitest/browser';

describe('Paragraph Component', () => {
	test('should display "1", "first quote" and "source one', () => {
		render(Paragraph, { number: '1', quote: 'first quote', source: 'source one' });

		const number = page.getByText(/1/i);
		const quote = page.getByText(/first quote/i);
		const source = page.getByText(/source one/i);

		expect(number).toBeInTheDocument();
		expect(quote).toBeInTheDocument();
		expect(source).toBeInTheDocument();
	});

	test('should display "2", "second quote" and "source two"', () => {
		render(Paragraph, { number: '2', quote: 'second quote', source: 'source two' });

		const number = page.getByText(/2/i);
		const quote = page.getByText(/second quote/i);
		const source = page.getByText(/source two/i);

		expect(number).toBeInTheDocument();
		expect(quote).toBeInTheDocument();
		expect(source).toBeInTheDocument();
	});
});
