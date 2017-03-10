Travis CI: [![Build Status](https://travis-ci.org/alexKazarin/SeleniumSimpleSample_JS.svg?branch=master)](https://travis-ci.org/alexKazarin/SeleniumSimpleSample_JS)

This project is simple example of HowTo organize Selenium-tests on JavaScript.

## You will need:
- IDE to code (ex. free [Visual Studio Code](https://code.visualstudio.com/download))
- Node (ex. used [v7.2.0](http://nodejs.ru/))
- npm (ex. used v3.10.9)

## How to run:
After you have installed all necessary elements, clone this repo and execute in terminal 
> $ npm run test

## How to create your personal project step by step:
Initialise npm project:
> $ npm init

Install dependencies:
* javascript test framework (ex. [Mocha](https://mochajs.org))  
> $ npm install --save-dev mocha  

* module for webdriver support  
> $ npm install --save-dev selenium-webdriver  

* module for assertions support  
> $ npm install --save-dev chai  

* module to work with file system (screenshots buffer)  
> $ npm install --save-dev fs  

Download webdriver and put it into project:
* used [Chromedriver](https://sites.google.com/a/chromium.org/chromedriver/)
*(ex. in repo last available v2.27 for Linux x64)*

Create npm-command "test" in package.json:
```javascript
"scripts": {
    "test": "node_modules/mocha/bin/mocha src/tests/Tests.js"
  },
```

Start coding tests! *(or view this repo tests and its comments)*

## Common structure:
Read about pObject pattern
