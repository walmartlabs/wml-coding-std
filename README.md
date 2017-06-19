# wml-coding-std
A module for keeping consistent JS coding standards at WML

Given that we are rapidly adopting prettier to do pure style formatting, we need a new approach to keeping a consistent coding standard.  The solution proposed is to create a new module `wml-coding-std`, that does this:
- includes eslint, eslint-config-walmart
- includes prettier
- includes npm postinstall scripts to: 
  1. setup .eslintrc for the host
  2. setup npm tasks for prettier
  3. setup git hooks for prettier
- includes a task that user can invoke manually to format all `js,jsx` code under all directories except the usual suspects like `node_modules`, `dist`, `coverage`
