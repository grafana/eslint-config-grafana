## 8.0.0

### Changes to support using the new JSX runtime
  - Required for React 19 support
  - This is a breaking change and will require coordinated updates to other related packages
    - Requires updating to `@grafana/tsconfig@2.0.0` or specifying `"jsx": "react-jsx",` manually in your tsconfig
    - Requires updating build tooling
      - If using esbuild, steps are [here](https://esbuild.github.io/content-types/#auto-import-for-jsx)
      - If using Babel, steps are [here](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#manual-babel-setup)
    - Requires running the [React codemod](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports)
      - this will remove unused React imports