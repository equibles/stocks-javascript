# EquiblesStocks.StocksApi

All URIs are relative to *https://api.equibles.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list**](StocksApi.md#list) | **GET** /stocks/list | Get a list of all the available stocks.
[**officers**](StocksApi.md#officers) | **GET** /stocks/officers | Get the officers of the company.
[**profile**](StocksApi.md#profile) | **GET** /stocks/profile | The profile of this stock.
[**screener**](StocksApi.md#screener) | **POST** /stocks/screener | Get a list of stocks constraint to several criteria.
[**search**](StocksApi.md#search) | **GET** /stocks/search | Search among all the available stocks.
[**splits**](StocksApi.md#splits) | **GET** /stocks/splits | Get all the splits for a given stock.

<a name="list"></a>
# **list**
> StockProfilesResponse list(opts)

Get a list of all the available stocks.

### Example
```javascript
import {EquiblesStocks} from 'equibles_stocks';
let defaultClient = EquiblesStocks.ApiClient.instance;

// Configure API key authorization: Query String
let Query String = defaultClient.authentications['Query String'];
Query String.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Query String.apiKeyPrefix = 'Token';

let apiInstance = new EquiblesStocks.StocksApi();
let opts = { 
  'page': 1, // Number | The number of the page to request.
  'pageSize': 100 // Number | The number of elements in each page. Max value: 100.
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
 **page** | **Number**| The number of the page to request. | [optional] [default to 1]
 **pageSize** | **Number**| The number of elements in each page. Max value: 100. | [optional] [default to 100]

### Return type

[**StockProfilesResponse**](StockProfilesResponse.md)

### Authorization

[Query String](../README.md#Query String)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="officers"></a>
# **officers**
> OfficersResponse officers(fullTicker)

Get the officers of the company.

### Example
```javascript
import {EquiblesStocks} from 'equibles_stocks';
let defaultClient = EquiblesStocks.ApiClient.instance;

// Configure API key authorization: Query String
let Query String = defaultClient.authentications['Query String'];
Query String.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Query String.apiKeyPrefix = 'Token';

let apiInstance = new EquiblesStocks.StocksApi();
let fullTicker = "fullTicker_example"; // String | The fully qualified ticker of the stock. Example: AAPL.XNAS

apiInstance.officers(fullTicker).then((data) => {
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

[**OfficersResponse**](OfficersResponse.md)

### Authorization

[Query String](../README.md#Query String)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="profile"></a>
# **profile**
> StockProfileResponse profile(fullTicker)

The profile of this stock.

### Example
```javascript
import {EquiblesStocks} from 'equibles_stocks';
let defaultClient = EquiblesStocks.ApiClient.instance;

// Configure API key authorization: Query String
let Query String = defaultClient.authentications['Query String'];
Query String.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Query String.apiKeyPrefix = 'Token';

let apiInstance = new EquiblesStocks.StocksApi();
let fullTicker = "fullTicker_example"; // String | The fully qualified ticker of the stock. Example: AAPL.XNAS

apiInstance.profile(fullTicker).then((data) => {
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

[**StockProfileResponse**](StockProfileResponse.md)

### Authorization

[Query String](../README.md#Query String)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="screener"></a>
# **screener**
> StockProfilesResponse screener(body, opts)

Get a list of stocks constraint to several criteria.

Get a list of the stocks constraint to several criteria. You only need to fill the fields of ScreenerRequest that you want to use as filters.

### Example
```javascript
import {EquiblesStocks} from 'equibles_stocks';
let defaultClient = EquiblesStocks.ApiClient.instance;

// Configure API key authorization: Query String
let Query String = defaultClient.authentications['Query String'];
Query String.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Query String.apiKeyPrefix = 'Token';

let apiInstance = new EquiblesStocks.StocksApi();
let body = new EquiblesStocks.ScreenerRequest(); // ScreenerRequest | The criteria used to filter the search results. You only need to fill the fields that you want to use on the search.
let opts = { 
  'page': 1, // Number | The number of the page to request.
  'pageSize': 100 // Number | The number of elements in each page. Max value: 100.
};
apiInstance.screener(body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ScreenerRequest**](ScreenerRequest.md)| The criteria used to filter the search results. You only need to fill the fields that you want to use on the search. | 
 **page** | **Number**| The number of the page to request. | [optional] [default to 1]
 **pageSize** | **Number**| The number of elements in each page. Max value: 100. | [optional] [default to 100]

### Return type

[**StockProfilesResponse**](StockProfilesResponse.md)

### Authorization

[Query String](../README.md#Query String)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="search"></a>
# **search**
> StockProfilesResponse search(text, opts)

Search among all the available stocks.

### Example
```javascript
import {EquiblesStocks} from 'equibles_stocks';
let defaultClient = EquiblesStocks.ApiClient.instance;

// Configure API key authorization: Query String
let Query String = defaultClient.authentications['Query String'];
Query String.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Query String.apiKeyPrefix = 'Token';

let apiInstance = new EquiblesStocks.StocksApi();
let text = "text_example"; // String | The text to search for.
let opts = { 
  'page': 1, // Number | The number of the page to request.
  'pageSize': 100 // Number | The number of elements in each page. Max value: 100.
};
apiInstance.search(text, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **String**| The text to search for. | 
 **page** | **Number**| The number of the page to request. | [optional] [default to 1]
 **pageSize** | **Number**| The number of elements in each page. Max value: 100. | [optional] [default to 100]

### Return type

[**StockProfilesResponse**](StockProfilesResponse.md)

### Authorization

[Query String](../README.md#Query String)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="splits"></a>
# **splits**
> SplitsResponse splits(fullTicker, opts)

Get all the splits for a given stock.

### Example
```javascript
import {EquiblesStocks} from 'equibles_stocks';
let defaultClient = EquiblesStocks.ApiClient.instance;

// Configure API key authorization: Query String
let Query String = defaultClient.authentications['Query String'];
Query String.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Query String.apiKeyPrefix = 'Token';

let apiInstance = new EquiblesStocks.StocksApi();
let fullTicker = "fullTicker_example"; // String | The fully qualified ticker of the stock. Example: AAPL.XNAS
let opts = { 
  'page': 1, // Number | The number of the page to request.
  'pageSize': 1000 // Number | The number of elements in each page. Max value: 1000.
};
apiInstance.splits(fullTicker, opts).then((data) => {
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

[**SplitsResponse**](SplitsResponse.md)

### Authorization

[Query String](../README.md#Query String)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

