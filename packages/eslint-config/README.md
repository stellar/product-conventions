# @stellar/eslint-config

## Usage

To install this package:

```
yarn add --dev @stellar/eslint-config eslint eslint-config-prettier eslint-config-react-app eslint-plugin-prettier

# install airbnb's config with their peer dependencies
npx install-peerdeps --dev eslint-config-airbnb

```

Then, extend our eslint config in your project's `.eslintrc.js`:

```js
module.exports = {
  extends: ["@stellar/eslint-config"]
};
```
