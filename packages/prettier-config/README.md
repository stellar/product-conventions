# @stellar/prettier-config

## Usage

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

If you need to extend or change the config, you can install it with
`yarn add --dev @stellar/prettier-config` and mix it in with your own config:

```js
// Your project's prettier.config.js
module.exports = {
  ...require("@stellar/prettier-config"),
  semi: false,
};
```
