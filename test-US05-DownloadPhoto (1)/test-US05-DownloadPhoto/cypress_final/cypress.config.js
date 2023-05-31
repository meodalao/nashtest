const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //DEFAULT CONFIGURATION
  defaultCommandTimeout: 10000,
  //e2e options
  e2e: {
    baseUrl: "https://unsplash.com",
    projectId: "wmbmub",
    specPattern: "**/*.cy.js",
    chromeWebSecurity: false,
    video: true,
    watchForFileChanges: false,
  },
  setupNodeEvents(on, config) {
    // implement node event listeners here
  },
  //env options
  env: {
    baseUrl: "https://unsplash.com",
    baseAPIurl: "https://api.unsplash.com",
    APIToken: "thLFoBN1PkPewhYG-opRB5Bo32dyJ5J13vB-OmO1zxo",
  },
});
