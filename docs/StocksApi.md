# EquiblesStocks.StocksApi

All URIs are relative to *https://api.equibles.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list**](StocksApi.md#list) | **GET** /stocks/list | Get a list of all the available stocks.
[**officers**](StocksApi.md#officers) | **GET** /stocks/officers | Get the officers of the company.
[**profile**](StocksApi.md#profile) | **GET** /stocks/profile | The profile of this stock.
[**search**](StocksApi.md#search) | **GET** /stocks/search | Search among all the available stocks.
[**splits**](StocksApi.md#splits) | **GET** /stocks/splits | Get all the splits for a given stock.

<a name="list"></a>
# **list**
> CommonStocksResponse list(opts)

Get a list of all the available stocks.

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

let apiInstance = new EquiblesStocks.StocksApi();
let opts = { 
  'page': 1, // Number | 
  'pageSize': 100 // Number | 
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
 **page** | **Number**|  | [optional] [default to 1]
 **pageSize** | **Number**|  | [optional] [default to 100]

### Return type

[**CommonStocksResponse**](CommonStocksResponse.md)

### Authorization

[Bearer](../README.md#Bearer), [Query String](../README.md#Query String)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="officers"></a>
# **officers**
> OfficersResponse officers(fullTicker)

Get the officers of the company.

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

[Bearer](../README.md#Bearer), [Query String](../README.md#Query String)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="profile"></a>
# **profile**
> CommonStockResponse profile(fullTicker)

The profile of this stock.

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

[**CommonStockResponse**](CommonStockResponse.md)

### Authorization

[Bearer](../README.md#Bearer), [Query String](../README.md#Query String)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="search"></a>
# **search**
> CommonStocksResponse search(text, opts)

Search among all the available stocks.

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

let apiInstance = new EquiblesStocks.StocksApi();
let text = "text_example"; // String | The text to search for.
let opts = { 
  'page': 1, // Number | 
  'pageSize': 100 // Number | 
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
 **page** | **Number**|  | [optional] [default to 1]
 **pageSize** | **Number**|  | [optional] [default to 100]

### Return type

[**CommonStocksResponse**](CommonStocksResponse.md)

### Authorization

[Bearer](../README.md#Bearer), [Query String](../README.md#Query String)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="splits"></a>
# **splits**
> SplitsResponse splits(fullTicker, opts)

Get all the splits for a given stock.

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

let apiInstance = new EquiblesStocks.StocksApi();
let fullTicker = "fullTicker_example"; // String | The fully qualified ticker of the stock. Example: AAPL.XNAS
let opts = { 
  'page': 1, // Number | 
  'pageSize': 1000 // Number | 
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
 **page** | **Number**|  | [optional] [default to 1]
 **pageSize** | **Number**|  | [optional] [default to 1000]

### Return type

[**SplitsResponse**](SplitsResponse.md)

### Authorization

[Bearer](../README.md#Bearer), [Query String](../README.md#Query String)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

