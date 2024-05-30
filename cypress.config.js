const { defineConfig } = require("cypress");
const cucumber=require("cypress-cucumber-preprocessor").default

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor",cucumber())
      // implement node event listeners here
      this.screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern:"cypress/e2e/cucumber/feature/*.feature"
  }
});
defaultCommandTimeout: 10000
