# @stellar/prettier-config

## Usage

First, install the package, and make sure you've upgraded Prettier to >= 1.17.0:

```
yarn add --dev @stellar/prettier-config prettier
```

You almost always want to run prettier on pre-commit, so no one ever has to
think about it. So set up `husky` and `lint-staged` if you haven't already:

```
yarn add --dev husky lint-staged
```

And add the config, as needed, to the top level of your `package.json`:

```
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*.js": [
      "prettier --write",
      "git add"
    ],
    "src/**/*.json": [
      "prettier --write",
      "git add"
    ],
    "src/**/*.ts": [
      "prettier --write",
      "git add"
    ]
  },

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
