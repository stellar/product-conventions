# Stellar Frontend Product Conventions

This is a repo of all conventions that the product team will use to build
Stellar's user interfaces.

# Goals

- Start with sane defaults
- Learn once, write anywhere
- Avoid bikeshedding
- Spend less time and energy bootstrapping projects
- Have an upgrade path for legacy projects

# Toolchain

- Write all libraries with Typescript
- Write all React projects with ES6 / Babel 7
- Prettier for formatting
- ESlint for style

# Exports

- All files should only export named variables, not defaults

# Directory structure for React apps

```
src/
  # this folder should output commonly-used basic components
  # for simplicity, all files should export styled-components
  # (if they can't, then it should at least accept both a `style` and `class` prop)
  basics/
    StyledComponent.js
    StyledButton.js

  components/
    SmallComponent.js

  # these are units of UI that are too large to fit in one component file
  features/
    LargeComponent/
      index.js
      ComponentPiece.js

  # each file should export { reducer, actions, actionTypes }
  ducks/
    model.js

  # everything here should output a function that returns a promise, and that
  # hits the network.
  api/

  # all exports from this file should be stateless functions
  # ideally they should all have unit tests
  helpers/
    makeString.js
    makeString.test.js

  # these should be simple files with very little (read: no) business logic.
  # they should compose together reducers, components, and features.
  pages/

  index.js




```
