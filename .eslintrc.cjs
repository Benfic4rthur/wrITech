module.exports = {
   env: { browser: true, es2020: true },
   extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
      'plugin:import/recommended',
      'plugin:jsx-a11y/recommended',
      'eslint-config-prettier',
   ],
   parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
   settings: {
      react: {
         version: 'detect',
      },
      'import/resolver': {
         node: {
            paths: ['src'],
            extensions: ['.js', '.jsx'],
         },
      },
   },
   rules: {
      'react-refresh/only-export-components': 'warn',
   },
   rules: {
      'no-unused-vars': [
         'error',
         {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: true,
            argsIgnorePattern: '^_',
         },
      ],
      'react/react-in-jsx-scope': 'off',
   },
};

// {
// 	"rules": {
// 		"react/react-in-jsx-scope": 0,
// 		"react-hooks/rules-of-hooks": "error",
// 		"no-console": 0,
// 		"react/state-in-constructor": 0,
// 		"indent": 0,
// 		"linebreak-style": 0,
// 		"react/prop-types": 0,
// 		"jsx-a11y/click-events-have-key-events": 0,
// 		"react/jsx-filename-extension": [
// 			1,
// 			{
// 				"extensions": [".js", ".jsx"]
// 			}
// 		],
// 		"prettier/prettier": [
// 			"error",
// 			{
// 				"trailingComma": "es5",
// 				"singleQuote": true,
// 				"printWidth": 100,
// 				"tabWidth": 4,
// 				"semi": true,
// 				"endOfLine": "auto"
// 			}
// 		]
// 	},
// 	"plugins": ["prettier", "react", "react-hooks"]
// }
