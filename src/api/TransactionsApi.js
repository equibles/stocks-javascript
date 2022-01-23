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

import ApiClient from "../ApiClient";
import TransactionsResponse from '../model/TransactionsResponse';

/**
* Transactions service.
* @module api/TransactionsApi
* @version v1
*/
export default class TransactionsApi {

    /**
    * Constructs a new TransactionsApi. 
    * @alias module:api/TransactionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Lists the insider transactions for a given stock.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionsResponse} and HTTP response
     */
    insidersWithHttpInfo(fullTicker, opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'fullTicker': fullTicker,
        'page': opts['page'],
        'pageSize': opts['pageSize']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer', 'Query String'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = TransactionsResponse;

      return this.apiClient.callApi(
        '/stocks/transactions/insiders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Lists the insider transactions for a given stock.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionsResponse}
     */
    insiders(fullTicker, opts) {
      return this.insidersWithHttpInfo(fullTicker, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Lists the institutional transactions for a given stock.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionsResponse} and HTTP response
     */
    institutionalWithHttpInfo(fullTicker, opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'fullTicker': fullTicker,
        'page': opts['page'],
        'pageSize': opts['pageSize']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer', 'Query String'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = TransactionsResponse;

      return this.apiClient.callApi(
        '/stocks/transactions/institutional', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Lists the institutional transactions for a given stock.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionsResponse}
     */
    institutional(fullTicker, opts) {
      return this.institutionalWithHttpInfo(fullTicker, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}
