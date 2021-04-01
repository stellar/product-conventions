# @stellar/eslint-config

## Usage

To install this package:

```
yarn add --dev \
  eslint \
  eslint-config-prettier \
  eslint-config-react \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint-plugin-jsdoc \
  eslint-plugin-prefer-arrow \
  eslint-plugin-jsdoc \
  @stellar/eslint-config
```

Then, extend our eslint config in your project's `.eslintrc.js`:

```js
module.exports = {
  extends: ["@stellar/eslint-config"],
};
```
