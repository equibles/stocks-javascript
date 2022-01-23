/**
 * Stocks
 * <h3>Authentication</h3>                     You need to authenticate to use this API.                     To authenticate click on the \"Authorize\" button and do one of the following steps.<br />                     1. Send your API key in the headers of the request by typing \"Bearer my-key\" on the Bearer authorization scheme.<br />                     2. Send your API key on the \"ApiKey\" query string parameter. To do this type your API key in the Query String authorization scheme.<br />                     Both methods are equally valid. We offer both options so that you can use the method that is easier to use in your application.<br />                     <br />                     <h3>API limits</h3>                     Your API key may be subject to daily/hourly limits. To know how much requests you have left look at the following headers in the response.<br />                     1. <strong>x-ratelimit-limit</strong> - The total number of requests that you are allowed to make in a given period (hour/day)                       2. <strong>x-ratelimit-remaining</strong> - The number of remaining requests that you can perform in the current period.<br />                     3. <strong>x-ratelimit-reset</strong> - The number of seconds until the current period resets.<br />                     <br />                     <h3>Suggestions</h3>                     You don't need to implement the whole API by hand in your programming language of choice.<br />                     Since this API has an OpenAPI specification you can use                      <a href=\"https://github.com/swagger-api/swagger-codegen\" target=\"_blank\">Swagger Generator</a>                      to automatically generate client stubs for more than 30 programming languages.                     <br />                     <br />                     You don't have an API key? <a href=\"https://www.equibles.com/api/pricing\" target=\"_blank\">Get one for free here.</a>
 *
 * OpenAPI spec version: v1
 * Contact: equibles@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EquiblesStocks);
  }
}(this, function(expect, EquiblesStocks) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EquiblesStocks.Performance();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Performance', function() {
    it('should create an instance of Performance', function() {
      // uncomment below and update the code to test Performance
      //var instane = new EquiblesStocks.Performance();
      //expect(instance).to.be.a(EquiblesStocks.Performance);
    });

    it('should have the property oneDay (base name: "oneDay")', function() {
      // uncomment below and update the code to test the property oneDay
      //var instane = new EquiblesStocks.Performance();
      //expect(instance).to.be();
    });

    it('should have the property oneWeek (base name: "oneWeek")', function() {
      // uncomment below and update the code to test the property oneWeek
      //var instane = new EquiblesStocks.Performance();
      //expect(instance).to.be();
    });

    it('should have the property twoWeeks (base name: "twoWeeks")', function() {
      // uncomment below and update the code to test the property twoWeeks
      //var instane = new EquiblesStocks.Performance();
      //expect(instance).to.be();
    });

    it('should have the property oneMonth (base name: "oneMonth")', function() {
      // uncomment below and update the code to test the property oneMonth
      //var instane = new EquiblesStocks.Performance();
      //expect(instance).to.be();
    });

    it('should have the property threeMonths (base name: "threeMonths")', function() {
      // uncomment below and update the code to test the property threeMonths
      //var instane = new EquiblesStocks.Performance();
      //expect(instance).to.be();
    });

    it('should have the property sixMonths (base name: "sixMonths")', function() {
      // uncomment below and update the code to test the property sixMonths
      //var instane = new EquiblesStocks.Performance();
      //expect(instance).to.be();
    });

    it('should have the property yearToDate (base name: "yearToDate")', function() {
      // uncomment below and update the code to test the property yearToDate
      //var instane = new EquiblesStocks.Performance();
      //expect(instance).to.be();
    });

    it('should have the property oneYear (base name: "oneYear")', function() {
      // uncomment below and update the code to test the property oneYear
      //var instane = new EquiblesStocks.Performance();
      //expect(instance).to.be();
    });

    it('should have the property twoYears (base name: "twoYears")', function() {
      // uncomment below and update the code to test the property twoYears
      //var instane = new EquiblesStocks.Performance();
      //expect(instance).to.be();
    });

    it('should have the property twoYearsAnnualized (base name: "twoYearsAnnualized")', function() {
      // uncomment below and update the code to test the property twoYearsAnnualized
      //var instane = new EquiblesStocks.Performance();
      //expect(instance).to.be();
    });

    it('should have the property threeYears (base name: "threeYears")', function() {
      // uncomment below and update the code to test the property threeYears
      //var instane = new EquiblesStocks.Performance();
      //expect(instance).to.be();
    });

    it('should have the property threeYearsAnnualized (base name: "threeYearsAnnualized")', function() {
      // uncomment below and update the code to test the property threeYearsAnnualized
      //var instane = new EquiblesStocks.Performance();
      //expect(instance).to.be();
    });

    it('should have the property fiveYears (base name: "fiveYears")', function() {
      // uncomment below and update the code to test the property fiveYears
      //var instane = new EquiblesStocks.Performance();
      //expect(instance).to.be();
    });

    it('should have the property fiveYearsAnnualized (base name: "fiveYearsAnnualized")', function() {
      // uncomment below and update the code to test the property fiveYearsAnnualized
      //var instane = new EquiblesStocks.Performance();
      //expect(instance).to.be();
    });

    it('should have the property tenYears (base name: "tenYears")', function() {
      // uncomment below and update the code to test the property tenYears
      //var instane = new EquiblesStocks.Performance();
      //expect(instance).to.be();
    });

    it('should have the property tenYearsAnnualized (base name: "tenYearsAnnualized")', function() {
      // uncomment below and update the code to test the property tenYearsAnnualized
      //var instane = new EquiblesStocks.Performance();
      //expect(instance).to.be();
    });

    it('should have the property twentyYears (base name: "twentyYears")', function() {
      // uncomment below and update the code to test the property twentyYears
      //var instane = new EquiblesStocks.Performance();
      //expect(instance).to.be();
    });

    it('should have the property twentyYearsAnnualized (base name: "twentyYearsAnnualized")', function() {
      // uncomment below and update the code to test the property twentyYearsAnnualized
      //var instane = new EquiblesStocks.Performance();
      //expect(instance).to.be();
    });

  });

}));
