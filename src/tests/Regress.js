

let tests = require('selenium-webdriver/testing'); //selenium realisation of mocha library to support describe/it structure
let webdriver = require('selenium-webdriver');
let configs = require('../../Configurations.js');




tests.describe('Selenium sample', function() {
  this.timeout(configs.timeout);
  let browser;
  let browserFunc;
  let browserScenario;
  // runs before each test in this block
  tests.beforeEach(function() {
   
    browser = new webdriver.Builder().usingServer(configs.Grid)
        .withCapabilities({
          'browserName': 'chrome',
          'timeout': '3000',
          'chromeOptions': {
            prefs: {
              'profile.managed_default_content_settings.notifications': 2
            }
          }
        }).build();
    browser.manage().window().maximize();
    
    console.log('\n\nTEST-SUITE NAME: ' + this.currentTest.parent.title);
    console.log('TEST NAME: ' + this.currentTest.title);

  });

  // runs after each test in this block
  tests.afterEach(function() {
    let testName = this.currentTest.title;
    let testStatus = this.currentTest.state;
    if (testStatus == 'failed') {
      console.log('Status: Test ' + testName + ' Failed!');
      browser.takeScreenshot().then(function(data) {
        fileSync.writeFileSync('Screenshots/' + testName + '.png', data, 'base64');
        browser.quit();
      });
    }
    else if (testStatus == 'passed') {
      console.log('Status: Test ' + testName + ' Passed!');
      browser.quit(); 
    }
  });

  tests.describe('Simple test suite', function() {
    tests.beforeEach(function() {
      console.log('Just for exapmle');  
    });

    tests.it('Simple test name', function(done) {
      browser.get("www.ya.ru").then(function() {
          console.log("Page opened");
        });
      done();
    });

    tests.xit('x-ited test', function (done) {
      done();
    });

  });
});
