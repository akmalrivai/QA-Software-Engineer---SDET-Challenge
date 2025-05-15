const { defineConfig } = require("cypress");
const browserify = require('@cypress/browserify-preprocessor');

module.exports = defineConfig({
  reporter:  "cypress-mochawesome-reporter",
  env: {
    baseUrl: "https://job-portal-user-dev-skx7zw44dq-et.a.run.app/",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.screenshotOnRunFailure =true;
      require("cypress-mochawesome-reporter/plugin")(on);
      let options = browserify.defaultOptions;
      options.browserifyOptions.transform[1][1].plugins.push([
        'module-resolver',
        {
          alias: {
            '@tests': './cypress',
            '@helpers': './cypress/helpers',
          },
        },
      ]);
      on('file:preprocessor', browserify(options));
    },
  },
});
