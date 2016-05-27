# Automated Testing in JavaScript with Cucumber-JS and Selenium-Webdriver

This is an example project using cucumber-js and selenium-webdriver to run browser-based automated tests, in both desktop Chrome and Chrome on Android, and Phantom, based on [Matt-B](https://github.com/Matt-B/cucumber-js-selenium-webdriver-example).

## Running the tests on the desktop

To get going, you'll need Chrome (or Chromium) installed, and you'll also need the Chromedriver executable available on your path. You can get Chromedriver from [here](http://chromedriver.storage.googleapis.com/index.html) and Phantom driver from [here](http://phantomjs.org/download.html) and then, in Linux, you can add the directory to your path like this:

    export PATH=$PATH:~/path/to/directory/containing/[chromedriver|phantomdriver]

If all seems OK, Ctrl+C to get rid of that, and carry on:

    git clone https://github.com/sauser10019/cucumberjs-selenium-webdriver-example.git
    cd cucumberjs-selenium-webdriver-example
    npm install


Once that has started successfully, then try running the test:

./node_modules/.bin/cucumberjs 

