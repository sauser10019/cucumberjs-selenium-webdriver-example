'use strict';

var webdriver = require("selenium-webdriver");
var assert = require("chai").assert;
var expect = require("chai").expect;

describe("Demonstrating webdriver promises", function() {
    this.timeout(30000);
    var driver;

    before(function() {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    });

	after(function() {
    	return driver.quit();
    });

    it("I open the blog website", function() {
		return driver.get("http://www.ralphlauren.com").then(function(msg){
			driver.sleep(500);
		});
    });

    it("The title includes Rlaph Lauren", function() {
        // Since we want the title from the page, we need to manually handle the Promise

        return driver.getTitle().then(function(title) {
            expect(title).to.include("Ralph Lauren");
        });
    });
});