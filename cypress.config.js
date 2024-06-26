const { defineConfig } = require("cypress");
const {allureCypress} =require('allure-cypress/reporter')
const fs = require('fs-extra');
const path = require('path');
module.exports = defineConfig({
  e2e: {
    "baseUrl":"https://www.amazon.in/",
    setupNodeEvents(on, config) {

      on('task', {
        clearAllureResults() {
          const allureResultsPath = 'F:\\cypress-demo\\amazon-demo\\allure-results';
          console.log('Clearing allure-results folder:', allureResultsPath);
          return fs.emptyDir(allureResultsPath);
        }
      });
    
      // Include allure plugin
      allureCypress(on, {
        resultsDir: './allure-results'
      });
    
      return config
      // implement node event listeners here
    },
  },
});
