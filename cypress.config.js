const { allureCypress } = require("allure-cypress/reporter");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    }
  }
});
