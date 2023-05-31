module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `@bolden/eslint-config-bolden`
  extends: ["bolden"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
