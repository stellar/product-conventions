# @stellar/prettier-config

## Usage

First, install the package, and make sure you've upgraded Prettier to >= 3.2.5:

```
yarn add --dev @stellar/prettier-config prettier
```

If you don't plan on changing the config at all, the easiest way to install is
to use the
[`prettier` parameter](https://prettier.io/docs/en/configuration.html#sharing-configurations)
in package.json:

```json
{
  "name": "@stellar/really-pretty-app",
  "prettier": "@stellar/prettier-config"
}
```

If you need to extend or change the config, you can mix it in with your own:

```js
// Your project's prettier.config.js
module.exports = {
  ...require("@stellar/prettier-config"),
  semi: false,
};
```
