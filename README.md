# Stellar Frontend Product Conventions

This is a repo of all conventions that the product team will use to build
Stellar's user interfaces.

# Goals

- Start with sane defaults
- Learn once, write anywhere
- Avoid bikeshedding
- Spend less time and energy bootstrapping projects
- Have an upgrade path for legacy projects

# Scope

All frontend products created from now (May 3, 2019) should follow these
conventions, unless there's a good reason not to. Every exception makes the
rules harder to follow, so please avoid making them.

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
  # All components should be placed in the components/ directory.
  # They should all be importable by two names separated by a slash:
  # import { LargeComponent } from "components/LargeComponent";
  components/
    StyledComponent.js
    StyledButton.js
    SmallComponent.js
    LargeComponent/
      index.js
      ComponentPiece.js

  # Each file should export { reducer, actions, actionTypes }
  ducks/
    model.js

  # Everything here should output a function that returns a promise, and that
  # hits the network.
  api/

  # All exports from this file should be stateless functions
  # And should be unit-tested
  helpers/
    makeString.js
    makeString.test.js

  # In single-page apps, routes point to single files.
  # This is a directory where each file maps to a route, and contains
  # No business logic other than reading in route params and using
  # them to decide which component(s) to show on that page.
  pages/

  # the entry point of the app.
  index.js
```

# React component style

## Prefer functions

React components should be functions, not React.Component classes. Stateful
components should use hooks.
