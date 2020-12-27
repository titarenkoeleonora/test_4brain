module.exports = {
  extends: [
    "stylelint-config-airbnb",
    "stylelint-config-rational-order",
    "stylelint-prettier/recommended",
  ],
  plugins: ["stylelint-order", "stylelint-scss"],
  rules: {
    "prettier/prettier": [
      true,
      {
        singleQuote: false,
        tabWidth: 2,
      },
    ],
    "prettier/prettier": [
      true,
      {
        singleQuote: false,
        tabWidth: 2,
      },
    ],
    "declaration-no-important": true,
    "length-zero-no-unit": true,
    "selector-class-pattern":
      "^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$",
    "declaration-no-important": true,
    "length-zero-no-unit": true,
    "selector-class-pattern":
      "^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$",
  },
};
