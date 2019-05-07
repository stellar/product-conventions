module.exports = {
  extends: ["react-app", "airbnb", "prettier"],
  plugins: ["prettier"],
  rules: {
    // OFF
    "class-methods-use-this": 0,
    "import/prefer-default-export": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/heading-has-content": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "linebreak-style": 0,
    "no-underscore-dangle": 0,
    "prefer-destructuring": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-indent": 0,
    "react/no-did-mount-set-state": 0,
    "react/no-did-update-set-state": 0,
    "react/require-default-props": 0,
    "react/jsx-one-expression-per-line": 0,
    "lines-between-class-members": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-wrap-multilines": 0,

    // WARN
    "no-console": ["warn", { allow: ["assert"] }],
    "no-debugger": 1,
    "no-unused-vars": 1,
    "react/no-unused-prop-types": 1,
    "react/no-array-index-key": 1,
    "react/sort-comp": 1,
    "react/default-props-match-prop-types": 1,
    "react/prefer-stateless-function": 1,
    "react/no-unused-state": 1,
    "react/prop-types": 1,
    "react/jsx-curly-brace-presence": 1,
    "arrow-body-style": 1,
    "valid-jsdoc": [1],
    "prefer-const": 1,
    "import/first": 1,
    "import/order": 1,
    "object-shorthand": 1,
    "react/no-access-state-in-setstate": 1,
    "require-await": 1,

    // ERROR
    "jsx-a11y/anchor-is-valid": [
      2,
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight", "to"],
        aspects: ["noHref", "invalidHref", "preferButton"],
      },
    ],
    "no-unused-expressions": [2, { allowTaggedTemplates: true }],
    "react/jsx-filename-extension": [2, { extensions: [".js"] }],
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: "config/webpack.config.dev.js",
      },
    },
  },
};
