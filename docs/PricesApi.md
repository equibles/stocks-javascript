# EquiblesStocks.PricesApi

All URIs are relative to *https://api.equibles.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**endOfDay**](PricesApi.md#endOfDay) | **GET** /stocks/prices/endofday | Lists the end of day prices for a given stock.
[**intraday**](PricesApi.md#intraday) | **GET** /stocks/prices/intraday | Lists the intraday prices for a given stock with one minute precision.

<a name="endOfDay"></a>
# **endOfDay**
> PricesResponse endOfDay(fullTicker, opts)

Lists the end of day prices for a given stock.

### Example
```javascript
import {EquiblesStocks} from 'equibles_stocks';
let defaultClient = EquiblesStocks.ApiClient.instance;

// Configure API key authorization: Query String
let Query String = defaultClient.authentications['Query String'];
Query String.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Query String.apiKeyPrefix = 'Token';

let apiInstance = new EquiblesStocks.PricesApi();
let fullTicker = "fullTicker_example"; // String | The fully qualified ticker of the stock. Example: AAPL.XNAS
let opts = { 
  'startTime': new Date("2013-10-20T19:20:30+01:00"), // Date | The start time of the window. UTC time formatted according to ISO 8601 (i.e: 2022-02-01T13:45:17)
  'endTime': new Date("2013-10-20T19:20:30+01:00"), // Date | The end time of the window. UTC time formatted according to ISO 8601 (i.e: 2022-02-01T13:45:17)
  'page': 1, // Number | The number of the page to request.
  'pageSize': 1000 // Number | The number of elements in each page. Max value: 50000.
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
 **startTime** | **Date**| The start time of the window. UTC time formatted according to ISO 8601 (i.e: 2022-02-01T13:45:17) | [optional] 
 **endTime** | **Date**| The end time of the window. UTC time formatted according to ISO 8601 (i.e: 2022-02-01T13:45:17) | [optional] 
 **page** | **Number**| The number of the page to request. | [optional] [default to 1]
 **pageSize** | **Number**| The number of elements in each page. Max value: 50000. | [optional] [default to 1000]

### Return type

[**PricesResponse**](PricesResponse.md)

### Authorization

[Query String](../README.md#Query String)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="intraday"></a>
# **intraday**
> PricesResponse intraday(fullTicker, opts)

Lists the intraday prices for a given stock with one minute precision.

### Example
```javascript
import {EquiblesStocks} from 'equibles_stocks';
let defaultClient = EquiblesStocks.ApiClient.instance;

// Configure API key authorization: Query String
let Query String = defaultClient.authentications['Query String'];
Query String.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Query String.apiKeyPrefix = 'Token';

let apiInstance = new EquiblesStocks.PricesApi();
let fullTicker = "fullTicker_example"; // String | The fully qualified ticker of the stock. Example: AAPL.XNAS
let opts = { 
  'startTime': new Date("2013-10-20T19:20:30+01:00"), // Date | The start time of the window. UTC time formatted according to ISO 8601 (i.e: 2022-02-01T13:45:17)
  'endTime': new Date("2013-10-20T19:20:30+01:00"), // Date | The end time of the window. UTC time formatted according to ISO 8601 (i.e: 2022-02-01T13:45:17)
  'page': 1, // Number | The number of the page to request.
  'pageSize': 1000 // Number | The number of elements in each page. Max value: 50000.
};
apiInstance.intraday(fullTicker, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fullTicker** | **String**| The fully qualified ticker of the stock. Example: AAPL.XNAS | 
 **startTime** | **Date**| The start time of the window. UTC time formatted according to ISO 8601 (i.e: 2022-02-01T13:45:17) | [optional] 
 **endTime** | **Date**| The end time of the window. UTC time formatted according to ISO 8601 (i.e: 2022-02-01T13:45:17) | [optional] 
 **page** | **Number**| The number of the page to request. | [optional] [default to 1]
 **pageSize** | **Number**| The number of elements in each page. Max value: 50000. | [optional] [default to 1000]

### Return type

[**PricesResponse**](PricesResponse.md)

### Authorization

[Query String](../README.md#Query String)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

