module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{css,ico,html}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'public/sw.js'
};