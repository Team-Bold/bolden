module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-bolden`
  extends: ["bolden"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
