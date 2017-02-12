
// selenium realisation of mocha library to support describe/it structure
let tests = require('selenium-webdriver/testing');
// webdriver library to create and control virtual browser
let webdriver = require('selenium-webdriver');
// lib for assertions support
let assert = require('chai').assert;
// lib for work with file system
let fileSync = require('fs');
// configuration file with global parameters - timeout's etc.
let configs = require('../../Configurations');
// must be defined to use in tests
let browser;

tests.describe("Selenium sample suite", function() {
  // timeout for one test execution
  this.timeout(configs.timeout);

  // block, runs before each test
  tests.beforeEach(function() {
    // browser initialisation
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
    // TIPS: by default window is not fullscreen size - some elements could not be found
    browser.manage().window().maximize();
    
    // information output
    console.log('\n\nSuite: ' + this.currentTest.parent.title);
    console.log('Test: ' + this.currentTest.title);

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
    else {
      console.log('Status: Test ' + testName + ' Unknown status!');
      browser.quit(); 
    }
  });

  tests.xit('Success simple test name', function(done) {
    let Url = "http://www.ya.ru";
    browser.get(Url).then(function() {
        console.log(`Page "${Url}" opened`);
    });
    done();
  });

  tests.it('Failed simple test name', function(done) {
    let Url = "http://www.ya.ru";
    browser.get(Url).then(function() {
        console.log(`Page "${Url}" opened`);
    });
    browser.getCurrentUrl().then(function(currentUrl) {
        assert.equal(currentUrl, "www.google.com",
            `Ищем url: www.google.com, а находим url: ${currentUrl}`);
    });
    done();
  });

  // to disable test use 'xit' (mocha syntax)
  tests.xit('x-ited test', function (done) {
    done();
  });
});
