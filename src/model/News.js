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

import ApiClient from '../ApiClient';

/**
* The News model module.
* @module model/News
* @version v1
*/
export default class News {
    /**
    * Constructs a new <code>News</code>.
    * @alias module:model/News
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>News</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/News} obj Optional instance to populate.
    * @return {module:model/News} The populated <code>News</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new News();
                        
            
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('ampUrl')) {
                obj['ampUrl'] = ApiClient.convertToType(data['ampUrl'], 'String');
            }
            if (data.hasOwnProperty('articleUrl')) {
                obj['articleUrl'] = ApiClient.convertToType(data['articleUrl'], 'String');
            }
            if (data.hasOwnProperty('author')) {
                obj['author'] = ApiClient.convertToType(data['author'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('imageUrl')) {
                obj['imageUrl'] = ApiClient.convertToType(data['imageUrl'], 'String');
            }
            if (data.hasOwnProperty('keywords')) {
                obj['keywords'] = ApiClient.convertToType(data['keywords'], ['String']);
            }
            if (data.hasOwnProperty('financialAssets')) {
                obj['financialAssets'] = ApiClient.convertToType(data['financialAssets'], ['String']);
            }
            if (data.hasOwnProperty('publishedTime')) {
                obj['publishedTime'] = ApiClient.convertToType(data['publishedTime'], 'Date');
            }
            if (data.hasOwnProperty('publisherName')) {
                obj['publisherName'] = ApiClient.convertToType(data['publisherName'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} title
    */
    'title' = undefined;
    /**
    * @member {String} ampUrl
    */
    'ampUrl' = undefined;
    /**
    * @member {String} articleUrl
    */
    'articleUrl' = undefined;
    /**
    * @member {String} author
    */
    'author' = undefined;
    /**
    * @member {String} description
    */
    'description' = undefined;
    /**
    * @member {String} imageUrl
    */
    'imageUrl' = undefined;
    /**
    * @member {Array.<String>} keywords
    */
    'keywords' = undefined;
    /**
    * @member {Array.<String>} financialAssets
    */
    'financialAssets' = undefined;
    /**
    * @member {Date} publishedTime
    */
    'publishedTime' = undefined;
    /**
    * @member {String} publisherName
    */
    'publisherName' = undefined;




}
