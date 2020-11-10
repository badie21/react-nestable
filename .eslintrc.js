module.exports = {
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		'no-console': 'off',
		'no-mixed-spaces-and-tabs': 'off',
	},
	env: {
		browser: true,
		node: true,
	},
	settings: {
		react: {
			version: '15.3',
		},
	},
};
