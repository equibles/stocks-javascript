# EquiblesStocks.ExchangesApi

All URIs are relative to *https://api.equibles.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**currencies**](ExchangesApi.md#currencies) | **GET** /stocks/exchanges/currencies | Get the list of all the currencies supported by this API.
[**list**](ExchangesApi.md#list) | **GET** /stocks/exchanges/list | Get the list of all the exchanges supported by this API.
[**stocks**](ExchangesApi.md#stocks) | **GET** /stocks/exchanges/stocks | Get all the stocks for a given exchange.

<a name="currencies"></a>
# **currencies**
> CurrenciesResponse currencies()

Get the list of all the currencies supported by this API.

### Example
```javascript
import {EquiblesStocks} from 'equibles_stocks';
let defaultClient = EquiblesStocks.ApiClient.instance;

// Configure API key authorization: Query String
let Query String = defaultClient.authentications['Query String'];
Query String.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Query String.apiKeyPrefix = 'Token';

let apiInstance = new EquiblesStocks.ExchangesApi();
apiInstance.currencies().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CurrenciesResponse**](CurrenciesResponse.md)

### Authorization

[Query String](../README.md#Query String)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="list"></a>
# **list**
> ExchangesResponse list()

Get the list of all the exchanges supported by this API.

### Example
```javascript
import {EquiblesStocks} from 'equibles_stocks';
let defaultClient = EquiblesStocks.ApiClient.instance;

// Configure API key authorization: Query String
let Query String = defaultClient.authentications['Query String'];
Query String.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Query String.apiKeyPrefix = 'Token';

let apiInstance = new EquiblesStocks.ExchangesApi();
apiInstance.list().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ExchangesResponse**](ExchangesResponse.md)

### Authorization

[Query String](../README.md#Query String)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="stocks"></a>
# **stocks**
> FinancialAssetsResponse stocks(operatingMic)

Get all the stocks for a given exchange.

Returns a list of fully qualified ticker names. A fully qualified ticker has the following structure: [Ticker].[ExchangeMic] Example: AAPL.XNAS.

### Example
```javascript
import {EquiblesStocks} from 'equibles_stocks';
let defaultClient = EquiblesStocks.ApiClient.instance;

// Configure API key authorization: Query String
let Query String = defaultClient.authentications['Query String'];
Query String.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Query String.apiKeyPrefix = 'Token';

let apiInstance = new EquiblesStocks.ExchangesApi();
let operatingMic = "operatingMic_example"; // String | The operating MIC of the exchange to search.

apiInstance.stocks(operatingMic).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operatingMic** | **String**| The operating MIC of the exchange to search. | 

### Return type

[**FinancialAssetsResponse**](FinancialAssetsResponse.md)

### Authorization

[Query String](../README.md#Query String)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

