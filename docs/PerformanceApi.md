# EquiblesStocks.PerformanceApi

All URIs are relative to *https://api.equibles.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list**](PerformanceApi.md#list) | **GET** /stocks/performance/list | Lists the performance for a given stock.

<a name="list"></a>
# **list**
> PerformanceResponse list(fullTicker)

Lists the performance for a given stock.

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

let apiInstance = new EquiblesStocks.PerformanceApi();
let fullTicker = "fullTicker_example"; // String | The fully qualified ticker of the stock. Example: AAPL.XNAS

apiInstance.list(fullTicker).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fullTicker** | **String**| The fully qualified ticker of the stock. Example: AAPL.XNAS | 

### Return type

[**PerformanceResponse**](PerformanceResponse.md)

### Authorization

[Bearer](../README.md#Bearer), [Query String](../README.md#Query String)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

