import getRandomParagraphNumber from '$lib/utilities/getRandomParagraphNumber';
import tractatus from '../../static/litterature/tractatus-logico-philosophicus.json';

export function load() {
	const todaysDate = Number(
		new Intl.DateTimeFormat('en-GB').format(new Date()).replaceAll('/', '')
	);
	const numberOfParagraps = tractatus.length;
	const paragraphNumber = getRandomParagraphNumber(todaysDate, numberOfParagraps);
	return tractatus[paragraphNumber];
}
