import { test, expect } from '@playwright/test';

test('has title "Daily Wittgenstein"', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle(/Daily Wittgenstein/);
});

test('to show paragraph', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveScreenshot();
});
