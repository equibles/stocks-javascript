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
import Officer from './Officer';
import ResponseStatus from './ResponseStatus';

/**
* The OfficersResponse model module.
* @module model/OfficersResponse
* @version v1
*/
export default class OfficersResponse {
    /**
    * Constructs a new <code>OfficersResponse</code>.
    * @alias module:model/OfficersResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>OfficersResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OfficersResponse} obj Optional instance to populate.
    * @return {module:model/OfficersResponse} The populated <code>OfficersResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OfficersResponse();
                        
            
            if (data.hasOwnProperty('status')) {
                obj['status'] = ResponseStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('errorMessage')) {
                obj['errorMessage'] = ApiClient.convertToType(data['errorMessage'], 'String');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [Officer]);
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/ResponseStatus} status
    */
    'status' = undefined;
    /**
    * The error message if the request was not successful.
    * @member {String} errorMessage
    */
    'errorMessage' = undefined;
    /**
    * The response results.
    * @member {Array.<module:model/Officer>} results
    */
    'results' = undefined;
    /**
    * The total number of results in this response.
    * @member {Number} count
    */
    'count' = undefined;




}
