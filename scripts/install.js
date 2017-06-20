#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

let rootDir = __dirname.split("/node_modules", 1)[0] || path.resolve(".");
if (rootDir === __dirname) {
  rootDir = path.resolve(".");
}

// Do not run install script if this package is the root
if (rootDir !== path.resolve(".")) {
  const pkg = require(path.resolve(rootDir, "package.json"));

  fs.writeFileSync(
    path.resolve(rootDir, "package.json"),
    JSON.stringify(
      Object.assign(pkg, {
        scripts: Object.assign(
          {
            format:
              "prettier --print-width 100 --write *.{js,jsx} `find . -type d -d 1 -exec echo '{}/**/*.{js,jsx}' \\; | egrep -v '(/node_modules/|/dist/|/coverage/)'`",
            precommit: "lint-staged"
          },
          pkg.scripts
        ),
        "lint-staged": Object.assign(
          {
            "**/*.{js,jsx}": ["prettier --print-width 100 --write", "git add"]
          },
          pkg["lint-staged"]
        )
      })
    )
  );
}
