"use strict";

module.exports = {
  extends: ["plugin:jest/recommended"],
  plugins: ["jest"],
  rules: {
    // Grafana's tests often use assertions within other libraries,
    // such as e2e from @grafana/e2e
    "jest/no-conditional-expect": "off",
    "jest/no-standalone-expect": "off",
    "jest/expect-expect": "off",
    "jest/valid-expect": "off",
  },
};
