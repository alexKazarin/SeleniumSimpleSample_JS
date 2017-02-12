Simple example of HowTo organize Selenium-test on JavaScript.

![Image of Selenium](http://johnbintz.github.io/jasmine-headless-webkit/images/f5.png)

## The beginning:

- Install IDE for develop code (ex. free [Visual Studio Code](https://code.visualstudio.com/download))
- Install [Node v7.2.0](http://nodejs.ru/)
- Install npm v3.10.9
- Download appropriate [Chromedriver](https://sites.google.com/a/chromium.org/chromedriver/)
(*in example used for Linux x64 v2.27 last available)*

## Installation:

Initialise npm project
> $ npm init

Install used dependencies:
* javascript test framwork (ex. [Mocha](https://mochajs.org))  
> $ npm install --save-dev mocha  

* selenium-webdriver, for run chromedriver  
> $ npm install --save-dev selenium-webdriver  

* module for assertions support  
> $ npm install --save-dev chai  

* module to work with file system (screenshots buffer)  
> $ npm install --save-dev fs  


## Execution:

Create npm-command Tests in package.json 
> $ npm run Tests



