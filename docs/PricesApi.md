# EquiblesStocks.PricesApi

All URIs are relative to *https://api.equibles.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**endOfDay**](PricesApi.md#endOfDay) | **GET** /stocks/prices/endofday | Lists the end of day prices for a given stock.

<a name="endOfDay"></a>
# **endOfDay**
> PricesResponse endOfDay(fullTicker, opts)

Lists the end of day prices for a given stock.

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

let apiInstance = new EquiblesStocks.PricesApi();
let fullTicker = "fullTicker_example"; // String | The fully qualified ticker of the stock. Example: AAPL.XNAS
let opts = { 
  'page': 1, // Number | The number of the page to request. Default: 1.
  'pageSize': 1000 // Number | The number of elements in each page. Max value: 1000. Default: 1000.
};
apiInstance.endOfDay(fullTicker, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fullTicker** | **String**| The fully qualified ticker of the stock. Example: AAPL.XNAS | 
 **page** | **Number**| The number of the page to request. Default: 1. | [optional] [default to 1]
 **pageSize** | **Number**| The number of elements in each page. Max value: 1000. Default: 1000. | [optional] [default to 1000]

### Return type

[**PricesResponse**](PricesResponse.md)

### Authorization

[Bearer](../README.md#Bearer), [Query String](../README.md#Query String)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

