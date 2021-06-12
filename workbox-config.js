module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{css,ico,webp,html,js}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'dist/sw.js'
};