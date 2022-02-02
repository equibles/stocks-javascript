# EquiblesStocks.NewsApi

All URIs are relative to *https://api.equibles.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list**](NewsApi.md#list) | **GET** /stocks/news/list | Get the latest news for this stock.
[**publishers**](NewsApi.md#publishers) | **GET** /stocks/news/publishers | Get all the available news publishers.

<a name="list"></a>
# **list**
> NewsResponse list(opts)

Get the latest news for this stock.

### Example
```javascript
import {EquiblesStocks} from 'equibles_stocks';
let defaultClient = EquiblesStocks.ApiClient.instance;

// Configure API key authorization: Query String
let Query String = defaultClient.authentications['Query String'];
Query String.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Query String.apiKeyPrefix = 'Token';

let apiInstance = new EquiblesStocks.NewsApi();
let opts = { 
  'fullTicker': "fullTicker_example", // String | The fully qualified ticker of the stock used to filter the results. Example: AAPL.XNAS
  'publisherName': "publisherName_example", // String | A news publisher used to filter the results.
  'page': 1, // Number | The number of the page to request.
  'pageSize': 100 // Number | The number of elements in each page. Max value: 500.
};
apiInstance.list(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fullTicker** | **String**| The fully qualified ticker of the stock used to filter the results. Example: AAPL.XNAS | [optional] 
 **publisherName** | **String**| A news publisher used to filter the results. | [optional] 
 **page** | **Number**| The number of the page to request. | [optional] [default to 1]
 **pageSize** | **Number**| The number of elements in each page. Max value: 500. | [optional] [default to 100]

### Return type

[**NewsResponse**](NewsResponse.md)

### Authorization

[Query String](../README.md#Query String)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="publishers"></a>
# **publishers**
> PublishersResponse publishers(opts)

Get all the available news publishers.

### Example
```javascript
import {EquiblesStocks} from 'equibles_stocks';
let defaultClient = EquiblesStocks.ApiClient.instance;

// Configure API key authorization: Query String
let Query String = defaultClient.authentications['Query String'];
Query String.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Query String.apiKeyPrefix = 'Token';

let apiInstance = new EquiblesStocks.NewsApi();
let opts = { 
  'page': 1, // Number | The number of the page to request.
  'pageSize': 100 // Number | The number of elements in each page. Max value: 1000.
};
apiInstance.publishers(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| The number of the page to request. | [optional] [default to 1]
 **pageSize** | **Number**| The number of elements in each page. Max value: 1000. | [optional] [default to 100]

### Return type

[**PublishersResponse**](PublishersResponse.md)

### Authorization

[Query String](../README.md#Query String)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

