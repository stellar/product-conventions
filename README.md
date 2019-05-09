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

- Write all libraries with Typescript and tsc
- Write all React projects with Babel 7 / ES6 / ts-loader
  - Files with JSX should be js
  - Non-JSX files should be ts
- Prettier for formatting
- ESlint for style

# Imports and exports

## All files should only export named variables, not defaults

## All projects should be configured to enable absolute import paths

```js
// This is ugly, hard to keep track of, and error-prone if you ever move a file
import { Sidebar } from "../../components/Sidebar";

// Much easier to manage
import { Sidebar } from "components/Sidebar";

// 99+% of import paths should have at most two path components and one delimiter
// more than that should be very rare indeed!

// avoid this unless necessary
import { Sidebar } from "components/template/elements/Sidebar";

// If the absolute path is very long and the relative one short, then consider
// using the relative path.

// this is more annoying...
import { Sidebar } from "components/LargeComponent/Sidebar";
// ...than just doing this
import { Sidebar } from "./Sidebar";
```

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
