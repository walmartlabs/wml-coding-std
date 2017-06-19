const fs = require("fs");
const path = require("path");

const package = require("./package.json");

fs.writeFileSync(
  path.resolve(__dirname, "package.json"),
  Object.assign(
    {
      scripts: Object.assign(
        {
          precommit: "lint-staged"
        },
        package.scripts
      ),
      "lint-staged": Object.assign(
        {
          "**/*.{js,jsx}": ["prettier --print-width 100 --write", "git add"]
        },
        package["lint-staged"]
      )
    },
    package
  )
);
