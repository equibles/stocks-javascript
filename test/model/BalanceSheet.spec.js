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
    instance = new EquiblesStocks.BalanceSheet();
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

  describe('BalanceSheet', function() {
    it('should create an instance of BalanceSheet', function() {
      // uncomment below and update the code to test BalanceSheet
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be.a(EquiblesStocks.BalanceSheet);
    });

    it('should have the property assets (base name: "assets")', function() {
      // uncomment below and update the code to test the property assets
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property tangibleAssets (base name: "tangibleAssets")', function() {
      // uncomment below and update the code to test the property tangibleAssets
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property currentAssets (base name: "currentAssets")', function() {
      // uncomment below and update the code to test the property currentAssets
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property cashAndCashEquivalents (base name: "cashAndCashEquivalents")', function() {
      // uncomment below and update the code to test the property cashAndCashEquivalents
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property cashAndShortTermInvestments (base name: "cashAndShortTermInvestments")', function() {
      // uncomment below and update the code to test the property cashAndShortTermInvestments
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property inventory (base name: "inventory")', function() {
      // uncomment below and update the code to test the property inventory
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property currentNetReceivables (base name: "currentNetReceivables")', function() {
      // uncomment below and update the code to test the property currentNetReceivables
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property nonCurrentAssets (base name: "nonCurrentAssets")', function() {
      // uncomment below and update the code to test the property nonCurrentAssets
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property propertyPlantEquipment (base name: "propertyPlantEquipment")', function() {
      // uncomment below and update the code to test the property propertyPlantEquipment
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property accumulatedDepreciationAmortization (base name: "accumulatedDepreciationAmortization")', function() {
      // uncomment below and update the code to test the property accumulatedDepreciationAmortization
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property intangibleAssets (base name: "intangibleAssets")', function() {
      // uncomment below and update the code to test the property intangibleAssets
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property intangibleAssetsExcludingGoodwill (base name: "intangibleAssetsExcludingGoodwill")', function() {
      // uncomment below and update the code to test the property intangibleAssetsExcludingGoodwill
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property goodwill (base name: "goodwill")', function() {
      // uncomment below and update the code to test the property goodwill
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property investments (base name: "investments")', function() {
      // uncomment below and update the code to test the property investments
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property longTermInvestments (base name: "longTermInvestments")', function() {
      // uncomment below and update the code to test the property longTermInvestments
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property shortTermInvestments (base name: "shortTermInvestments")', function() {
      // uncomment below and update the code to test the property shortTermInvestments
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property otherCurrentAssets (base name: "otherCurrentAssets")', function() {
      // uncomment below and update the code to test the property otherCurrentAssets
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property otherNonCurrentAssets (base name: "otherNonCurrentAssets")', function() {
      // uncomment below and update the code to test the property otherNonCurrentAssets
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property liabilities (base name: "liabilities")', function() {
      // uncomment below and update the code to test the property liabilities
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property currentLiabilities (base name: "currentLiabilities")', function() {
      // uncomment below and update the code to test the property currentLiabilities
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property currentAccountsPayable (base name: "currentAccountsPayable")', function() {
      // uncomment below and update the code to test the property currentAccountsPayable
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property deferredRevenue (base name: "deferredRevenue")', function() {
      // uncomment below and update the code to test the property deferredRevenue
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property currentDebt (base name: "currentDebt")', function() {
      // uncomment below and update the code to test the property currentDebt
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property shortTermDebt (base name: "shortTermDebt")', function() {
      // uncomment below and update the code to test the property shortTermDebt
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property nonCurrentLiabilities (base name: "nonCurrentLiabilities")', function() {
      // uncomment below and update the code to test the property nonCurrentLiabilities
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property capitalLeaseObligations (base name: "capitalLeaseObligations")', function() {
      // uncomment below and update the code to test the property capitalLeaseObligations
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property longTermDebt (base name: "longTermDebt")', function() {
      // uncomment below and update the code to test the property longTermDebt
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property currentLongTermDebt (base name: "currentLongTermDebt")', function() {
      // uncomment below and update the code to test the property currentLongTermDebt
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property longTermDebtNonCurrent (base name: "longTermDebtNonCurrent")', function() {
      // uncomment below and update the code to test the property longTermDebtNonCurrent
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property shortLongTermDebtTotal (base name: "shortLongTermDebtTotal")', function() {
      // uncomment below and update the code to test the property shortLongTermDebtTotal
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property otherCurrentLiabilities (base name: "otherCurrentLiabilities")', function() {
      // uncomment below and update the code to test the property otherCurrentLiabilities
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property otherNonCurrentLiabilities (base name: "otherNonCurrentLiabilities")', function() {
      // uncomment below and update the code to test the property otherNonCurrentLiabilities
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property equity (base name: "equity")', function() {
      // uncomment below and update the code to test the property equity
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property treasuryStock (base name: "treasuryStock")', function() {
      // uncomment below and update the code to test the property treasuryStock
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property retainedEarnings (base name: "retainedEarnings")', function() {
      // uncomment below and update the code to test the property retainedEarnings
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property commonStock (base name: "commonStock")', function() {
      // uncomment below and update the code to test the property commonStock
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property sharesOutstanding (base name: "sharesOutstanding")', function() {
      // uncomment below and update the code to test the property sharesOutstanding
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property accumulatedOtherComprehensiveIncome (base name: "accumulatedOtherComprehensiveIncome")', function() {
      // uncomment below and update the code to test the property accumulatedOtherComprehensiveIncome
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

    it('should have the property workingCapital (base name: "workingCapital")', function() {
      // uncomment below and update the code to test the property workingCapital
      //var instane = new EquiblesStocks.BalanceSheet();
      //expect(instance).to.be();
    });

  });

}));
