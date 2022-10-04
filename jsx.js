"use strict";

module.exports = {
  overrides: [
    {
      excludedFiles: ["**/*.{spec,test}.{ts,tsx}"],
      extends: ["plugin:jsx-a11y/strict"],
      files: ["**/*"],
    },
  ],
  plugins: ["jsx-a11y"],
};
