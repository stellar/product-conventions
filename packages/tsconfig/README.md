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

Our tsconfig configuration mandates that your source code be in `./src` and that
you output to `./dist`.

Note that you'll have to provide a significant amount of project-specific
[configuration options](https://www.typescriptlang.org/docs/handbook/compiler-options.html).
Check out [this configuration](./tsconfig.json) to see what's defined and what
was left out.
