# EquiblesStocks.SectorsApi

All URIs are relative to *https://api.equibles.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list**](SectorsApi.md#list) | **GET** /stocks/sectors/list | Lists all the sectors.
[**searchStocks**](SectorsApi.md#searchStocks) | **GET** /stocks/sectors/searchstocks | Lists and the stock in a given sector/industry.

<a name="list"></a>
# **list**
> SectorsResponse list()

Lists all the sectors.

### Example
```javascript
import EquiblesStocks from 'equibles_stocks';
let defaultClient = EquiblesStocks.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

// Configure API key authorization: Query String
let Query String = defaultClient.authentications['Query String'];
Query String.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Query String.apiKeyPrefix = 'Token';

let apiInstance = new EquiblesStocks.SectorsApi();
apiInstance.list().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SectorsResponse**](SectorsResponse.md)

### Authorization

[Bearer](../README.md#Bearer), [Query String](../README.md#Query String)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="searchStocks"></a>
# **searchStocks**
> FinancialAssetsResponse searchStocks(opts)

Lists and the stock in a given sector/industry.

### Example
```javascript
import EquiblesStocks from 'equibles_stocks';
let defaultClient = EquiblesStocks.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

// Configure API key authorization: Query String
let Query String = defaultClient.authentications['Query String'];
Query String.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Query String.apiKeyPrefix = 'Token';

let apiInstance = new EquiblesStocks.SectorsApi();
let opts = { 
  'sectorName': "sectorName_example", // String | The name of the sector to use as filter.
  'industryName': "industryName_example" // String | The name of the industry to use as filter.
};
apiInstance.searchStocks(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sectorName** | **String**| The name of the sector to use as filter. | [optional] 
 **industryName** | **String**| The name of the industry to use as filter. | [optional] 

### Return type

[**FinancialAssetsResponse**](FinancialAssetsResponse.md)

### Authorization

[Bearer](../README.md#Bearer), [Query String](../README.md#Query String)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

