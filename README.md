# grafana-eslint-config

> Grafana's [ESLint](https://eslint.org) config.

## Installation

```shell
yarn add @grafana/eslint-config --dev
```

or:

```shell
npm install @grafana/eslint-config --save-dev
```

Don't forget to install peerDependencies.

1. Install the correct versions of each package, which are listed by the command:

```sh
npm info "@grafana/eslint-config@latest" peerDependencies
```

If using **npm 5+**, use this command:

```sh
npx install-peerdeps --dev @grafana/eslint-config
```

If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.
Otherwise, run `npm info "@grafana/eslint-config@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.

## Configuration (legacy: .eslintrc\*)

Extend our configuration to get reasonable defaults:

```json
{
  "extends": ["@grafana/eslint-config"]
}
```

It will automatically handle `*.(js|ts|tsx)` files.

## Configuration (new: eslint.config.js)

From v8.21.0, Eslint supported a new flat config system where `eslint.config.js` replaces `.eslintrc*` as the default config file name. Eslint@8.x supports both systems, while Eslint@9.x only supports the new flat config.

A guide on how to migrate to a flat config can be found [here](https://eslint.org/docs/latest/extend/plugin-migration-flat-config).

The following official blog posts are available for interested parties:

- https://eslint.org/blog/2022/08/new-config-system-part-1/
- https://eslint.org/blog/2022/08/new-config-system-part-2/
- https://eslint.org/blog/2022/08/new-config-system-part-3/

This package contains a single flat config object which can be imported like so:

```js
const grafanaConfig = require("@grafana/eslint-config/flat");

/**
 * @type {Array<import('eslint').Linter.Config>}
 */
module.exports = [
  {
    grafanaConfig,
  },
];
```

You are then free to add/override properties.

Note: Our shareable configs does not preconfigure `files`, `ignore`, or `languageOptions.globals`. For most of the cases, you probably want to configure some properties for your project.

```js
const grafanaConfig = require("@grafana/eslint-config/flat");

/**
 * @type {Array<import('eslint').Linter.Config>}
 */
module.exports = [
  {
    ignores: [".github", ".yarn", "**/build/", "**/compiled/", "**/dist/"],
  },
  grafanaConfig,
  {
    name: "myproject/defaults",
    files: ["**/*.{ts,tsx,js,jsx}"],
    rules: {
      // add custom rules here.
    },
  },
];
```

## Publishing

Publishing is handled by github actions which is triggered by a merge to master that contains a change to the version property in the `package.json` file. You can either do that manually or use the command below to version bump, commit and tag.

```shell
npm version [<newversion> | major | minor | patch ]
```

Also be sure to update any official packages that depend on this with fixes and version increases.

## Versioning

It's probable that _any_ change will be a breaking one, so it's best to stick to major version releases.
