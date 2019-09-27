# Stellar Frontend Product Conventions

This is a repo of all conventions that the product team will use to build
Stellar's user interfaces.

# Contents

- [Goals](#goals)
- [Scope](#scope)
- [Tools](#tools)
- [General](#general)
- [Naming](#naming)
- [Directories](#directories)
- [Imports](#imports)
- [Exports](#exports)
- [Components](#components)
- [Styling](#styling)
- [Numbers](#numbers)
- [Text](#text)
- [Redux](#redux)
- [Component properties](#component-properties)
- [File layout](#file-layout)
- [Data](#data)
- [API design](#api-design)

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

# Tools

- Write all non-React libraries with Typescript and tsc
- Write all React projects with Babel 7 / ES6 / ts-loader
  - Files with JSX should be js
  - Non-JSX files should be ts
- Prettier for formatting
- ESlint for style

## Use Stellar's base TS / eslint / prettier configs

- https://www.npmjs.com/package/@stellar/prettier-config
- https://www.npmjs.com/package/@stellar/eslint-config
- https://www.npmjs.com/package/@stellar/tslint-config
- https://www.npmjs.com/package/@stellar/tsconfig

# Naming

## Name things with intention

Names for variables, functions, components, reducers, etc. are the foremost way
other engineers can understand your code. Take care when doing so!

## Variables should usually be nouns

Variables describe things, so you usually want to choose good nouns that describe
the contents of the variables.

```js
// Bad: yuck
const a = 1;

// Okay: `i` in for loops is well-known, so that's fine
for (i = 0; i < anchors.length; i++) {
  console.log(anchors[i]);
}

// Good: straightforward!
const user = {};
const users = [];

// Bad: whoa, if you only saw the name, wouldn't you think this was an array?
const tokens = {};

// Bad: what is "thing"?
if (users.length > 0) {
  thing = thing.concat(users);
}

// Bad: what is being "archived"?
const archived = [];

// Good: much better!
const archivedUsers = [];
const archivedToken = {};
```

## Booleans should be named with `is`, `has`, `did`, etc.

It can be hard to distinguish boolean variables from non-booleans.

```js
// Bad: is this a noun, or an object of an archived user?
const archivedUser = false;

// Good: much clearer!
const isUserArchived = true;

// Bad: As in English prose, double negatives are confusing.
const isUnsuccessful = false; // So that means it's not not successful??

// Good: much clearer!
const isSuccessful = true;
```

## Function names should be verbs or verb phrases

Functions perform actions, so they are best described by verbs. This makes it
less confusing when you're passing around functions as variables.

```js
// Bad: Is this variable a function or an object?
const handler = ev => handle(ev);

// Good: much clearer!
const handleEvent = ev => handle(ev);
```

When a component or function accepts a callback, it's our convention to name
the callback `on{EventName}` to make it clear that it's a callback.

```jsx
// Bad: Is `handler` another React component, or a user object, or a callback?
const button = <Button handler={ev => handleEvent(ev)} />;

// Good: much clearer what this does!
const button = <Button onPress={ev => handleEvent(ev)} />;
```

For functions that hit the network, we tend to prefix their names with "fetch":

```js
// Bad: A developer might carelessly call this function, not realizing it hits the network
for (i = 0; i < 1000; i++) {
  getUser(i); // Named with get, so must be non-blocking???
}

// Good: the functions behavior is telegraphed by the name!
Promise.all(range(1000).map(fetchUser)).then(() =>
  console.log("All users fetched!")
);
```

## Beware of words with different meanings

You should be _unambiguous_ and _explicit_ when naming: pick words that don't have
alternate meanings that could confuse your intent.

```js
// Bad: "Load" is a noun and a verb, and it has several uses: initialization AND
// preparation AND fetching!
const load = true;

// Good: Much more explicit.
const isPageLoaded = true;
const isComponentLoaded = true;
const userPayload = [];
const fetchUsers = () => fetch("/users");
```

# Directories

## React apps

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

# Imports

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

## Group imports by location

Be organized with your import grouping. Here's the order of my groups:

- NPM packages
- constants
- helpers
- basics
- components
- features
- local imports

## If a constant exists, always import it

Don't use a string literal if there exists a constant for it. It's easier to
grep for a constant.

```js
// bad
const button = <Button size="small" theme="gray" />;

// good
const button = <Button size={INPUT_SIZE.small} theme={BUTTON_THEME.gray} />;
```

The known trade-off here is it can be hard to spot small misspellings, so be
careful!

```js
// this might not throw an error
const button = <Button size={INPUT_SIZE.smol} theme={BUTTON_THEME.grey} />;
```

# Exports

## All files should only export named variables, not defaults

# Components

## Prefer functions

React components should be functions, not React.Component classes. Stateful
components should use hooks.

## File organization

Try to organize your files in this order:

- Imports
- Styled components
- Constants local to only this file
- Local functions
- Exported functions
- React component
- `PropType` definitions

# Styling

## Styled components

### Naming

Styled components that are not exported should be suffixed with `El`.

```js
// bad
const Text = styled.span``;

// good
const TextEl = styled.span``;

export const Text = styled.span``;
```

### ALWAYS merge ThemeProvider themes

By default, the styled-components docs tell you to use ThemeProvider like this:

```
// bad
<ThemeProvider theme={{ someThemeProperty: "#000" }}>
  ...
</ThemeProvider>
```

_Do not do this !!_ If you do, it will clobber parent theme properties! At best you will get a lot of errors and at worst
you'll get a ton of difficult-to-find, difficult-to-debug mismatched colors!

Instead, you may pass a function to `theme` that returns a new theme object. Use
that to mix in the existing theme with your new stuff:

```
// v good
<ThemeProvider theme={(defaultTheme) => ({
  ...defaultTheme,
  someThemeProperty: "#000",
})}>
  ...
</ThemeProvider>
```

# Numbers

## Always use Big or BigNumber for crypto amounts

For all numbers that describe crypto amounts (prices, volumes, etc), store and
manipulate them as Bigs. Floating point imprecision makes it unsuitable for
cryptocurrency amounts.

## Always manipulate numbers using Big functions

Use Big's `plus`, `minus`, `div`, and `times` to perform math. Use those
specific names, don't use their aliases.

## If something needs to be a real `number`, parse it as late as possible

If something like a charting library needs to use real JavaScript numbers, wait
until the last possible second to parse the Big values. (If possible, do it
right as you call the function that needs numbers.)

## You don't need to use `toString()`

Referencing a Big number will return a string, and things like Math.min/max will
cast strings as integers.

# Text

## Use the right symbols

Always use the correct typographic symbol for apostrophes, double-quotes,
ellipses, etc.

```js
return <div>“It’s going to be super sweet…”</div>;
```

## Always localize text

If your project involves translations, get used to always converting visible strings to text.

## Never localize variables

Don't localize variables. Instead, localize the string literal.

```js
// not good!
const text = "This is some cool text!";
return <Trans>{text}</Trans>;

// do this instead
const text = i18n.t`This is some cool text!`;
return text;

// or this
return <Trans>This is some cool text!</Trans>;
```

## Don't break up sentences

Remember that a human is going to see each translatable string separately and
has to translate them into another language, which could have completely
different notions of word order, sentence structure, etc.

```js
// not good!
  <Trans>This text has</Trans>
  {values}
  <Trans>in the middle</Trans>

// good
  <Trans>
    An order has been filled for {amount} {currency}
  </Trans>
```

## Use `i18n.t` for template literals

```js
// broken (will silently not be translated)
i18n._(`hello`);

// still broken
i18n.t(`hello`);

// works
i18n.t`hello`;
```

# Redux

## In action creators, don't run `dispatch()` in a `try`

If you do, then any React error caused by a change to props via
`mapDispatchToProps` will get handled by the `catch` block and swallowed
inappropriately.

To fix, don't call `dispatch` inside a try, or inside an `actionWithStatus`,
which wraps the action with a `try {} catch {}`.

Use `setTimeout` to achieve this:

```js
async () => {
  try {
    const data = await fetchSomething();
    setTimeout(() => dispatch({ type: SUCCESS, payload: data }));
  } catch (e) {
    dispatch({ type: FAILURE, payload: { /* ... */ }, 0);
  }
};
```

# Data

## Don't modify API responses

Let's say you have to pull from a messy API that looks like a mess:

```js
// from https://www.messy.net/api/liked_users

{
  likedUsers: [
    [
      ["Edwina", "Pooperstein", null, "Farmer"],
      ["Josephine", "Sendfunds", "17 Poop Lane", "CEO"]
    ]
  ];
}
```

You'd probably rather each user be rolled into an object:

```js
{
  firstName: "Edwina",
  lastName: "Pooperstein",
  address: null,
  occupation: "Farmer"
}
```

Where possible, avoid the urge to modify the file before storing. Because if you
have a complicated series of steps to transform data, you have to repeat those
steps if you add pagination, or you use the data in a new context, or any of the
weird things that can happen to code over a long period of time.

So you might want to consider storing the data exactly as you get it from the
API, and performing the transform later down the stack with a testable helper
function.

# API Design

By "API", we mean any interface that a developer could use. The principles
outlined below apply to style guides, function parameters, component properties,
backend services, and anything else used by human beings.

## Complex object specs can be difficult to follow

When functions require complex, specific object shapes as parameters, it can
be difficult for a developer to follow.

```jsx
// Wait, does the User component take a `theme` property or a `style` prop?
// Does it accept marginRight instead of marginLeft?
// Does it take height or lineHeight?
const User = ({ name, description, theme: { marginLeft, height } }) => (
  <div style={{ marginLeft, lineHeight: height }}>
    {name} - {description}
  </div>
);
```

## It's easier to remember an interface if it resembles one you've seen before

Modelling your API on something similar and well-known makes it faster for
other developers to understand.

```jsx
// One alternative to this is to pass through a `style` object, which people
// are familiar with using.
const User = ({ name, description, style }) => (
  <div style={style}>
    {name} - {description}
  </div>
);
```

# Reusable components

Components that are built to be reused in many contexts have to be treated
carefully, especially if packaged as a separate npm module, because of the
additional effort to ship changes to them.

## When to make it reusable

The first incarnation should always be a one-off within a project. When a second
instance occurs, it's often best to implement it as a second one-off—many visual
or functional patterns are used with minor variations and diverge over time.
Making them reusable initially causes more friction during maintenance and
ultimately doesn't benefit the project.

## Reusable patterns

### Composition, not configuration

Reusable components should favor
[composition](https://reactjs.org/docs/composition-vs-inheritance.html) instead
of configuration. A single component that takes a complex object as a prop is
less flexible and more difficult to extend than one that applies a relatively
simple style and fits together well with other components.

```js
// bad
<Accordion
  data={[
    {content: 'This is an accordion list item'},
    {content: 'This is an accordion list item'},
  ]}
/>

// good
<Accordion>
  <AccordionItem>
    This is an accordion list item
  </AccordionItem>
  <AccordionItem>
    This is an accordion list item
  </AccordionItem>
</Accordion>
```

### Context or render props

Context and render props are both great patterns for exposing data from the
innards of a component. Avoid `React.cloneElement` unless there's a good reason,
because it breaks unpredictably.

```js
// Connecting `Accordion` to `AccordionItem` with context works fine here, but
// `cloneElement` will silently pass props to `FancyBorder` instead.
<Accordion>
  <FancyBorder>
    <AccordionItem>This is an accordion list item</AccordionItem>
  </FancyBorder>
</Accordion>

// When data needs to be used within a component, render props are a flexible way
// of enabling this.
<Form render={({ values, onChange}) =>
  <FormEntries values={values} onChange={onChange} />
} />

// Context is good too, but has some awkward ergonomics at times. The below
// example only works when rendered as a child of our imaginary
const FormBody = () => {
  const { values, onChange } = useContext(FormContext)

  return <FormEntries values={values} onChange={onChange} />
}
// ...
<Form><FormBody /></Form>
```

### Pass props

It's extremely common to want to apply custom styles to an element (margin
adjustment, etc), so `className` and `style` should be passed through to a
relevant element. In general, it's most effective to spread all additional
props, which will pass through event handlers as well.

```js
// bad
({ children }) =>
  <SomeElementEl>{children}</SomeElementEl>

// good
({ children, ...props }) =>
  <SomeElementEl {...props}>{children}</SomeElementEl>
```

### Forward ref

Less commonly, we may need to grab the ref of an element. As a best practice,
any stylistic component should use `forwardRef` to enable this.

```js
// bad
({ children, ...props }) => (
  <SomeElementEl {...props}>{children}</SomeElementEl>
);

// good
React.forwardRef(({ children, ...props }, ref) => (
  <SomeElementEl {...props}>{children}</SomeElementEl>
));
```
