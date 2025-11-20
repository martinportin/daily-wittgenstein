import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Source from './Source.svelte';
import { page } from 'vitest/browser';

describe('Source component', () => {
	test('should display "source one"', () => {
		render(Source, { source: 'source one' });

		const source = page.getByText(/source one/i);
		expect(source).toBeInTheDocument();
	});

	test('should display "source two"', () => {
		render(Source, { source: 'source two' });

		const source = page.getByText(/source two/i);
		expect(source).toBeInTheDocument();
	});

	test('should display "source three', () => {
		render(Source, { source: 'source three' });

		const source = page.getByText(/source three/i);
		expect(source).toBeInTheDocument();
	});
});
