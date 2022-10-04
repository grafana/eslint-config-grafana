"use strict";

module.exports = {
  extends: ["plugin:lodash/recommended"],
  plugins: ["lodash"],
  rules: {
    "lodash/import-scope": ["error", "member"],
  },
};
