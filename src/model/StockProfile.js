/*
 * Stocks
 * <h3>Authentication</h3>                     You need to authenticate to use this API.                     To authenticate click on the \"Authorize\" button and do one of the following steps.<br />                     1. Send your API key in the headers of the request by typing \"Bearer my-key\" on the Bearer authorization scheme.<br />                     2. Send your API key on the \"ApiKey\" query string parameter. To do this type your API key in the Query String authorization scheme.<br />                     Both methods are equally valid. We offer both options so that you can use the method that is easier to use in your application.<br />                     <br />                     <h3>API limits</h3>                     Your API key may be subject to daily/hourly limits. To know how much requests you have left look at the following headers in the response.<br />                     1. <strong>x-ratelimit-limit</strong> - The total number of requests that you are allowed to make in a given period (hour/day)                       2. <strong>x-ratelimit-remaining</strong> - The number of remaining requests that you can perform in the current period.<br />                     3. <strong>x-ratelimit-reset</strong> - The number of seconds until the current period resets.<br />                     <br />                     <h3>Suggestions</h3>                     You don't need to implement the whole API by hand in your programming language of choice.<br />                     Since this API has an OpenAPI specification you can use                      <a href=\"https://github.com/swagger-api/swagger-codegen\" target=\"_blank\">Swagger Generator</a>                      to automatically generate client stubs for more than 30 programming languages.                     <br />                     <br />                     You don't have an API key? <a href=\"https://www.equibles.com/api/pricing\" target=\"_blank\">Get one for free here.</a>
 *
 * OpenAPI spec version: v1
 * Contact: equibles@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.32
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {AssetType} from './AssetType';
import {Exchange} from './Exchange';
import {Image} from './Image';
import {Industry} from './Industry';
import {Officer} from './Officer';
import {Price} from './Price';

/**
 * The StockProfile model module.
 * @module model/StockProfile
 * @version v1
 */
export class StockProfile {
  /**
   * Constructs a new <code>StockProfile</code>.
   * @alias module:model/StockProfile
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>StockProfile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StockProfile} obj Optional instance to populate.
   * @return {module:model/StockProfile} The populated <code>StockProfile</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StockProfile();
      if (data.hasOwnProperty('logo'))
        obj.logo = Image.constructFromObject(data['logo']);
      if (data.hasOwnProperty('address'))
        obj.address = ApiClient.convertToType(data['address'], 'String');
      if (data.hasOwnProperty('cik'))
        obj.cik = ApiClient.convertToType(data['cik'], 'String');
      if (data.hasOwnProperty('locale'))
        obj.locale = ApiClient.convertToType(data['locale'], 'String');
      if (data.hasOwnProperty('marketCap'))
        obj.marketCap = ApiClient.convertToType(data['marketCap'], 'Number');
      if (data.hasOwnProperty('sharesOutstandingLast'))
        obj.sharesOutstandingLast = ApiClient.convertToType(data['sharesOutstandingLast'], 'Number');
      if (data.hasOwnProperty('phoneNumber'))
        obj.phoneNumber = ApiClient.convertToType(data['phoneNumber'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('employees'))
        obj.employees = ApiClient.convertToType(data['employees'], 'Number');
      if (data.hasOwnProperty('delisted'))
        obj.delisted = ApiClient.convertToType(data['delisted'], 'Boolean');
      if (data.hasOwnProperty('listDate'))
        obj.listDate = ApiClient.convertToType(data['listDate'], 'Date');
      if (data.hasOwnProperty('website'))
        obj.website = ApiClient.convertToType(data['website'], 'String');
      if (data.hasOwnProperty('industry'))
        obj.industry = Industry.constructFromObject(data['industry']);
      if (data.hasOwnProperty('officers'))
        obj.officers = ApiClient.convertToType(data['officers'], [Officer]);
      if (data.hasOwnProperty('ticker'))
        obj.ticker = ApiClient.convertToType(data['ticker'], 'String');
      if (data.hasOwnProperty('fullTicker'))
        obj.fullTicker = ApiClient.convertToType(data['fullTicker'], 'String');
      if (data.hasOwnProperty('assetType'))
        obj.assetType = AssetType.constructFromObject(data['assetType']);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('exchange'))
        obj.exchange = Exchange.constructFromObject(data['exchange']);
      if (data.hasOwnProperty('lastPrice'))
        obj.lastPrice = Price.constructFromObject(data['lastPrice']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Image} logo
 */
StockProfile.prototype.logo = undefined;

/**
 * @member {String} address
 */
StockProfile.prototype.address = undefined;

/**
 * @member {String} cik
 */
StockProfile.prototype.cik = undefined;

/**
 * @member {String} locale
 */
StockProfile.prototype.locale = undefined;

/**
 * @member {Number} marketCap
 */
StockProfile.prototype.marketCap = undefined;

/**
 * @member {Number} sharesOutstandingLast
 */
StockProfile.prototype.sharesOutstandingLast = undefined;

/**
 * @member {String} phoneNumber
 */
StockProfile.prototype.phoneNumber = undefined;

/**
 * @member {String} description
 */
StockProfile.prototype.description = undefined;

/**
 * @member {Number} employees
 */
StockProfile.prototype.employees = undefined;

/**
 * @member {Boolean} delisted
 */
StockProfile.prototype.delisted = undefined;

/**
 * @member {Date} listDate
 */
StockProfile.prototype.listDate = undefined;

/**
 * @member {String} website
 */
StockProfile.prototype.website = undefined;

/**
 * @member {module:model/Industry} industry
 */
StockProfile.prototype.industry = undefined;

/**
 * @member {Array.<module:model/Officer>} officers
 */
StockProfile.prototype.officers = undefined;

/**
 * @member {String} ticker
 */
StockProfile.prototype.ticker = undefined;

/**
 * @member {String} fullTicker
 */
StockProfile.prototype.fullTicker = undefined;

/**
 * @member {module:model/AssetType} assetType
 */
StockProfile.prototype.assetType = undefined;

/**
 * @member {String} name
 */
StockProfile.prototype.name = undefined;

/**
 * @member {module:model/Exchange} exchange
 */
StockProfile.prototype.exchange = undefined;

/**
 * @member {module:model/Price} lastPrice
 */
StockProfile.prototype.lastPrice = undefined;
