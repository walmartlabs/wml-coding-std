const prettier = require("prettier");

module.exports = function(source, options = { printWidth: 100 }) {
  prettier.format(source, options);
};
