'use strict';

var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var expect = require("chai").expect;

module.exports = function() {

    var self = this;
    this.World = require('../support/world.js').World;

	this.Given(/^I am on the home page$/, function (callback) {
		this.driver.get('http://www.ralphlauren.com');
		this.driver.sleep(1000);
		//var title = this.driver.getTitle();
		//expect(title).to.include('Ralph Lauren');
		callback();
	});
	this.Given(/^I go to the login page$/, function (callback) {
		this.driver.sleep(1000);
		this.driver.findElement(
			webdriver.By.xpath("//ul[@id='utility-nav']/li[2]/a")).then(
				function(input) {
				  input.click();
			});
			this.driver.sleep(1000);
		callback();
	});
	this.Given(/^I sign in$/, function (callback) {
		this.driver.sleep(1000);
		this.driver.findElement(
			webdriver.By.id("emailId")).then(
				function(input) {
					input.sendKeys("jason.sauser@ralphlauren.com");
				});
		this.driver.sleep(1000);
		this.driver.findElement(
			webdriver.By.id("passwd")).then(
				function(input) {
					input.sendKeys("1squidy1");
				});
		this.driver.sleep(1000);
		this.driver.findElement(
			webdriver.By.xpath("//form[@name='returningCustomer']/div/input")).then(
				function(input) {
					input.click();
				});
		this.driver.sleep(1000);
		callback();
	});
	this.Then(/^I sign out$/, function (callback) {
		this.driver.sleep(1000);
		this.driver.findElement(
			webdriver.By.id("MyAccount-LogOutButton")).then(
				function(input){
					input.click();
				});
		callback();
	});
};
