# @stellar/tsconfig

The default TypeScript config for Stellar Development Foundation projects.

## Usage

Install the package:

```
yarn add --dev @stellar/tsconfig
```

Then extend your projects' `tsconfig.json` file with it:

```json
{
  "extends": "@stellar/tsconfig"
}
```

Note that you'll have to provide a significant amount of project-specific
[configuration options](https://www.typescriptlang.org/docs/handbook/compiler-options.html), including the `outDir` and `include` files.
Check out [this configuration](./tsconfig.json) to see what's defined and what
was left out.
