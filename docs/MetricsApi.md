# EquiblesStocks.MetricsApi

All URIs are relative to *https://api.equibles.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**priceToEarnings**](MetricsApi.md#priceToEarnings) | **GET** /stocks/metrics/pricetoearnings | Get the price to earnings ratio over time for this stock.

<a name="priceToEarnings"></a>
# **priceToEarnings**
> MetricNullablePointsResponse priceToEarnings(fullTicker, opts)

Get the price to earnings ratio over time for this stock.

### Example
```javascript
import {EquiblesStocks} from 'equibles_stocks';
let defaultClient = EquiblesStocks.ApiClient.instance;

// Configure API key authorization: Query String
let Query String = defaultClient.authentications['Query String'];
Query String.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Query String.apiKeyPrefix = 'Token';

let apiInstance = new EquiblesStocks.MetricsApi();
let fullTicker = "fullTicker_example"; // String | The fully qualified ticker of the stock. Example: AAPL.XNAS
let opts = { 
  'page': 1, // Number | The number of the page to request.
  'pageSize': 1000 // Number | The number of elements in each page. Max value: 1000.
};
apiInstance.priceToEarnings(fullTicker, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fullTicker** | **String**| The fully qualified ticker of the stock. Example: AAPL.XNAS | 
 **page** | **Number**| The number of the page to request. | [optional] [default to 1]
 **pageSize** | **Number**| The number of elements in each page. Max value: 1000. | [optional] [default to 1000]

### Return type

[**MetricNullablePointsResponse**](MetricNullablePointsResponse.md)

### Authorization

[Query String](../README.md#Query String)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

