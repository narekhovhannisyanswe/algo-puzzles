import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/src/*.js'],
    languageOptions: {
      globals: {
        es6: true
      }
    },
    plugins: { prettier: eslintPluginPrettier },
    rules: { 'prettier/prettier': 'error' },
    ignores: ['**/node_modules/', '**/dist/*']
  }
];
