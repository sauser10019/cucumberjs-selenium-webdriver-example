'use strict';

var webdriver = require('selenium-webdriver');

module.exports = function() {

    var self = this;
    var driver;

	this.When(/^I launch Chrome$/, function (callback) {
		 driver = new webdriver.Builder().forBrowser('chrome').build();
		 callback();
	});

	this.Then(/^the browser opens$/, function (callback) {
		driver.get('http://www.ralphlauren.com');
		driver.sleep(1111);
		callback();
	});
};



