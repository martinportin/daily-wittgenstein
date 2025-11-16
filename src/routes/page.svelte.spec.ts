import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
	it('should render a paragraph', async () => {
		render(Page);

		const paragraph = page.getByText(/daily-wittgensten/i);
		await expect.element(paragraph).toBeInTheDocument();
	});
});
