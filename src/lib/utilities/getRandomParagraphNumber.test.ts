import { describe, expect, test } from 'vitest';
import getRandomParagraphNumber from './getRandomParagraphNumber';

describe('getRandomParagraphNumber', () => {
	test('should return 1 when seed is 3 and range is 2', () => {
		const paragraphNumber = getRandomParagraphNumber(3, 2);
		expect(paragraphNumber).toBe(1);
	});

	test('should return 2 when seed is 8 and range is 3', () => {
		const paragraphNumber = getRandomParagraphNumber(8, 3);
		expect(paragraphNumber).toBe(2);
	});

	test('should return 3 when seed is 15 and range is 4', () => {
		const paragraphNumber = getRandomParagraphNumber(7, 4);
		expect(paragraphNumber).toBe(3);
	});

	test('should return 4 when seed is 24 and range is 5', () => {
		const paragraphNumber = getRandomParagraphNumber(24, 5);
		expect(paragraphNumber).toBe(4);
	});

	test('should return 0 when seed is 30 and range is 6', () => {
		const paragraphNumber = getRandomParagraphNumber(30, 6);
		expect(paragraphNumber).toBe(0);
	});
});
