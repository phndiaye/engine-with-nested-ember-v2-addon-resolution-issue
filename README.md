# nested-v2-addon-reproduction

This repo serves as a reproduction for the following issue:

When using an Ember v2 format addon inside an engine, it looks like the resolver is unable to resolve files from the
addon (models, components, etc.), leading to the following error:

```
Could not find module 'engine-package/models/user' imported from '(require)'
```

After some tests and adding a "classic" addon in the project, I ended up with two scenarios:

- [FAILING SCENARIO] The v2 addon is installed by the engine (https://github.com/phndiaye/engine-with-nested-ember-v2-addon-resolution-issue/commit/359df5f0e402236ead45e2ddbebc3eadc6eea7a4)
- [WORKING SCENARIO] The v2 addon is installed by a classic addon (https://github.com/phndiaye/engine-with-nested-ember-v2-addon-resolution-issue/pull/1/commits/56bbef383ae1770fe85cee85a68d9b60c0f78b15)

The v2 addon itself is located here: https://github.com/phndiaye/nested-ember-v2-addon (it doesn't do much though)

# Reproduction steps

After pulling this repository:

- Install dependencies

```shell
yarn install
```

- Run the server

```shell
yarn start
```

- What to look for?

In the failing scenario (commit hash: 359df5f), when landing on the engine's route (http://localhost:4200/engine-package), the resolution errors
are visible in the console.

In the working scenario (commit hash: 56bbef3), when landing on the engine's route (http://localhost:4200/engine-package), the following
strings should be visible: `Component from the first-level addon / Foobar! / My super engine / Foobar!`

The failing commit hash is: 359df5f.
The working commit hash is: 56bbef3.
