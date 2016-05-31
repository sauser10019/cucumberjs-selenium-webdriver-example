'use strict';

var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var expect = require("chai").expect;

module.exports = function() {

    var self = this;
    this.World = require('../support/world.js').World;

	this.Given(/^I am on the home page$/, function () {

		this.driver.get('http://www.ralphlauren.com');
		return this.driver.getTitle().then(function(title){
			expect(title).to.include('Ralph Lauren');
		});
	});
	this.Given(/^I go to the login page$/, function () {

		return this.driver.findElement(
			webdriver.By.xpath("//ul[@id='utility-nav']/li[2]/a")).then(function(input) {
				  input.click();
			});
	});
	this.Given(/^I sign in$/, function () {
		this.driver.findElement(
			webdriver.By.id("emailId")).then(function(input) {
				input.sendKeys("jason.sauser@ralphlauren.com");
			});
		this.driver.findElement(
			webdriver.By.id("passwd")).then(function(input) {
				input.sendKeys("1squidy1");
			});
		return this.driver.findElement(
			webdriver.By.xpath("//form[@name='returningCustomer']/div/input")).then(function(input) {
				input.click();
			});
	});
	this.Then(/^I sign out$/, function () {
		return this.driver.findElement(
			webdriver.By.id("MyAccount-LogOutButton")).then(function(input){
				input.click();
			});
	});
};
