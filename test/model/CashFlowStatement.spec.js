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
    instance = new EquiblesStocks.CashFlowStatement();
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

  describe('CashFlowStatement', function() {
    it('should create an instance of CashFlowStatement', function() {
      // uncomment below and update the code to test CashFlowStatement
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be.a(EquiblesStocks.CashFlowStatement);
    });

    it('should have the property operatingCashFlow (base name: "operatingCashFlow")', function() {
      // uncomment below and update the code to test the property operatingCashFlow
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

    it('should have the property paymentsForOperatingActivities (base name: "paymentsForOperatingActivities")', function() {
      // uncomment below and update the code to test the property paymentsForOperatingActivities
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

    it('should have the property proceedsFromOperatingActivities (base name: "proceedsFromOperatingActivities")', function() {
      // uncomment below and update the code to test the property proceedsFromOperatingActivities
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

    it('should have the property changeInOperatingLiabilities (base name: "changeInOperatingLiabilities")', function() {
      // uncomment below and update the code to test the property changeInOperatingLiabilities
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

    it('should have the property changeInOperatingAssets (base name: "changeInOperatingAssets")', function() {
      // uncomment below and update the code to test the property changeInOperatingAssets
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

    it('should have the property depreciationDepletionAndAmortization (base name: "depreciationDepletionAndAmortization")', function() {
      // uncomment below and update the code to test the property depreciationDepletionAndAmortization
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

    it('should have the property capitalExpenditures (base name: "capitalExpenditures")', function() {
      // uncomment below and update the code to test the property capitalExpenditures
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

    it('should have the property changeInReceivables (base name: "changeInReceivables")', function() {
      // uncomment below and update the code to test the property changeInReceivables
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

    it('should have the property changeInInventory (base name: "changeInInventory")', function() {
      // uncomment below and update the code to test the property changeInInventory
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

    it('should have the property profitLoss (base name: "profitLoss")', function() {
      // uncomment below and update the code to test the property profitLoss
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

    it('should have the property investments (base name: "investments")', function() {
      // uncomment below and update the code to test the property investments
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

    it('should have the property cashFlowFromInvestment (base name: "cashFlowFromInvestment")', function() {
      // uncomment below and update the code to test the property cashFlowFromInvestment
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

    it('should have the property cashFlowFromFinancing (base name: "cashFlowFromFinancing")', function() {
      // uncomment below and update the code to test the property cashFlowFromFinancing
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

    it('should have the property proceedsFromRepaymentsOfShortTermDebt (base name: "proceedsFromRepaymentsOfShortTermDebt")', function() {
      // uncomment below and update the code to test the property proceedsFromRepaymentsOfShortTermDebt
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

    it('should have the property paymentsForRepurchaseOfCommonStock (base name: "paymentsForRepurchaseOfCommonStock")', function() {
      // uncomment below and update the code to test the property paymentsForRepurchaseOfCommonStock
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

    it('should have the property paymentsForRepurchaseOfEquity (base name: "paymentsForRepurchaseOfEquity")', function() {
      // uncomment below and update the code to test the property paymentsForRepurchaseOfEquity
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

    it('should have the property paymentsForRepurchaseOfPreferredStock (base name: "paymentsForRepurchaseOfPreferredStock")', function() {
      // uncomment below and update the code to test the property paymentsForRepurchaseOfPreferredStock
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

    it('should have the property dividendPayout (base name: "dividendPayout")', function() {
      // uncomment below and update the code to test the property dividendPayout
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

    it('should have the property dividendPayoutCommonStock (base name: "dividendPayoutCommonStock")', function() {
      // uncomment below and update the code to test the property dividendPayoutCommonStock
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

    it('should have the property dividendPayoutPreferredStock (base name: "dividendPayoutPreferredStock")', function() {
      // uncomment below and update the code to test the property dividendPayoutPreferredStock
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

    it('should have the property proceedsFromIssuanceOfCommonStock (base name: "proceedsFromIssuanceOfCommonStock")', function() {
      // uncomment below and update the code to test the property proceedsFromIssuanceOfCommonStock
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

    it('should have the property proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet (base name: "proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet")', function() {
      // uncomment below and update the code to test the property proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

    it('should have the property proceedsFromIssuanceOfPreferredStock (base name: "proceedsFromIssuanceOfPreferredStock")', function() {
      // uncomment below and update the code to test the property proceedsFromIssuanceOfPreferredStock
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

    it('should have the property proceedsFromRepurchaseOfEquity (base name: "proceedsFromRepurchaseOfEquity")', function() {
      // uncomment below and update the code to test the property proceedsFromRepurchaseOfEquity
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

    it('should have the property proceedsFromSaleOfTreasuryStock (base name: "proceedsFromSaleOfTreasuryStock")', function() {
      // uncomment below and update the code to test the property proceedsFromSaleOfTreasuryStock
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

    it('should have the property changeInCashAndCashEquivalents (base name: "changeInCashAndCashEquivalents")', function() {
      // uncomment below and update the code to test the property changeInCashAndCashEquivalents
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

    it('should have the property changeInExchangeRate (base name: "changeInExchangeRate")', function() {
      // uncomment below and update the code to test the property changeInExchangeRate
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

    it('should have the property netIncome (base name: "netIncome")', function() {
      // uncomment below and update the code to test the property netIncome
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

    it('should have the property netBorrowings (base name: "netBorrowings")', function() {
      // uncomment below and update the code to test the property netBorrowings
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

    it('should have the property changeInWorkingCapital (base name: "changeInWorkingCapital")', function() {
      // uncomment below and update the code to test the property changeInWorkingCapital
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

    it('should have the property otherNonCashItems (base name: "otherNonCashItems")', function() {
      // uncomment below and update the code to test the property otherNonCashItems
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

    it('should have the property freeCashFlow (base name: "freeCashFlow")', function() {
      // uncomment below and update the code to test the property freeCashFlow
      //var instane = new EquiblesStocks.CashFlowStatement();
      //expect(instance).to.be();
    });

  });

}));
