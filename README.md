# Stellar Frontend Product Conventions

This is a repo of all conventions that the product team will use to build
Stellar's user interfaces.

# Contents

- [Goals](#goals)
- [Scope](#scope)
- [Ethos](#ethos)
- [Tools](#tools)
- [Process](#process)
- [Code style](code-style)

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

# Ethos

## Above all, write code for others to read

- Prefer straightforward code that explains itself over clever code.
- Be deliberate about variable, function, and component names.
- Pick straightforward inputs and outputs for functions and components. They
  should line up with the name.
- If something will be used more than once, write unit tests and/or a story.

## Don't ask for permission

- Mistakes are okay. Iterating is good.
- State your plans out loud.
- For anything longer than a couple sentences, write a spec.
- You don't need permission to merge, you have the privilege and responsibility
  to merge.

## Use the tools as much as possible

- Prefer declarative over imperative.
- Use React lifecycle methods sparingly, but prefer it over doing things outside
  of React.
- Don't be afraid to use Redux, especially if have a lot of pass-through params.
- Try really, really, really hard to use an existing helper func, constant,
  basic, component, or feature.
  - Consider refactoring or abstracting (and adding any needed tests or other
    supporting code) if there's something close, but not quite what you need

# Process

This is intended as a baseline, a starting point that projects will evolve to
suit their needs

- Pick the top card off the sprint backlog that you can do that's not assigned
- Using checklists/subtasks, break the task down into half-day chunks
- Ideally, after each chunk, the site will build and work; but don't agonize
  over this
- For each chunk:
  - make a shared branch named `<initials>-taskname`, i.e. `mz-marketsrewrite`
  - Do the thing
  - If you start doing the thing and find unexpected complexity:
    - Step back and come up with a plan
    - Post your plan in the most relevant slack channel
  - Make a PR for your change and post a link in `#product-frontend`
    - See [writing a PR](#writing-a-pr)
  - Address any feedback
  - Merge it into master once all checks pass, and you're comfortable with it

## Writing a task

Whether an Asana task, GitHub issue, Trello card, or something else, a task
should have enough information that anyone reading it can understand what needs
to happen. Spend a little extra time on them to add information. It won't be
perfect, it should have information that anyone coming across it blind can
gather more details on their own, without having to ask what a ticket is about.

## Writing a PR

Reviewing code without context is difficult, so add as much context as you can
without it being a burden, but avoid referencing private materials in
open-source PRs. Summarize the problem, describe the intent of the solution, and
point out any particularly interesting parts of the code. Try adding screenshots
(even annotated!) or screen recordings if the issue is difficult to communicate
with words.

PR titles are used as commit mesages, so make them concise and descriptive.
They're trimmed to 70 characters when displayed in GitHub.

# Code style

Read [our styleguide](./STYLEGUIDE.md) for more information.

# Plans

A plan is (1) a problem you're facing with (2) one or more approaches that solve
that problem. Thinking through and announcing your plan out loud is a better way
of solving problems than diving in immediately:

- You approach a problem _with intention_ instead of _blindly_
- Posting your plan in a Slack channel informs others what you're doing and how
  you're doing it
- People have the opportunity to correct misconceptions, suggest alternatives,
  or otherwise improve your plan before you've spent time implementing them

The effort to make a plan should be proportional to the effort to execute the
plan.

- If it takes longer to write a plan than execute it, Just Do It
- If the project takes an hour or less, write a sentence or two
- If the project is a couple days or more, consider writing it in a markdown
  file

Make sure you think hard about what your \_actual problem is. Let's say your
task is to "build a function that takes a number and outputs that number's
Lebowski coefficient." So you write a plan:

```
I'm working on the Lebowski coefficient, and my plan is to figure out what a
Lebowski coefficient is.
```

That's not a very specific plan: it doesn't give you actionable steps to take,
and it's not substantive enough for someone else to comment on.

One of the reasons is because it misattributes the problem at hand. It's not
that you find Lebowski coefficient; the problem is _you don't know what a
Lebowski coefficient is._

This is a much better plan:

```
I'm working on the Lebowski coefficient and I don't know what a
Lebowski coefficient is, so I'm going to Google around for definitions.
```

That's a concrete plan! And maybe it's one for someone else to point out an NPM
repo that calculates them automatically, or that a blog has covered the topic
succinctly, or that our project cut Lebowski coefficients last week.

Plans about exploratory problems are some of the most useful to think out loud
about, because they have more ways to attack them, which generates better
discussion than problems with obvious solutions.
