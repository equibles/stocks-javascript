# EquiblesStocks.FundamentalsApi

All URIs are relative to *https://api.equibles.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dividends**](FundamentalsApi.md#dividends) | **GET** /stocks/fundamentals/dividends | Get the dividends for a given stock.
[**financialReports**](FundamentalsApi.md#financialReports) | **GET** /stocks/fundamentals/financialreports | Get the financial statements for a given stock.

<a name="dividends"></a>
# **dividends**
> DividendsResponse dividends(fullTicker, opts)

Get the dividends for a given stock.

### Example
```javascript
import {EquiblesStocks} from 'equibles_stocks';
let defaultClient = EquiblesStocks.ApiClient.instance;

// Configure API key authorization: Query String
let Query String = defaultClient.authentications['Query String'];
Query String.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Query String.apiKeyPrefix = 'Token';

let apiInstance = new EquiblesStocks.FundamentalsApi();
let fullTicker = "fullTicker_example"; // String | The fully qualified ticker of the stock. Example: AAPL.XNAS
let opts = { 
  'page': 1, // Number | The number of the page to request.
  'pageSize': 1000 // Number | The number of elements in each page. Max value: 1000.
};
apiInstance.dividends(fullTicker, opts).then((data) => {
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

[**DividendsResponse**](DividendsResponse.md)

### Authorization

[Query String](../README.md#Query String)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="financialReports"></a>
# **financialReports**
> FundamentalsResponse financialReports(fullTicker, year, fiscalPeriod, opts)

Get the financial statements for a given stock.

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

let apiInstance = new EquiblesStocks.FundamentalsApi();
let fullTicker = "fullTicker_example"; // String | The fully qualified ticker of the stock. Example: AAPL.XNAS
let year = 56; // Number | The year of the report.
let fiscalPeriod = new EquiblesStocks.FiscalPeriod(); // FiscalPeriod | The fiscal period of the report.
let opts = { 
  'page': 1, // Number | The number of the page to request.
  'pageSize': 50 // Number | The number of elements in each page. Max value: 50.
};
apiInstance.financialReports(fullTicker, year, fiscalPeriod, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fullTicker** | **String**| The fully qualified ticker of the stock. Example: AAPL.XNAS | 
 **year** | **Number**| The year of the report. | 
 **fiscalPeriod** | [**FiscalPeriod**](.md)| The fiscal period of the report. | 
 **page** | **Number**| The number of the page to request. | [optional] [default to 1]
 **pageSize** | **Number**| The number of elements in each page. Max value: 50. | [optional] [default to 50]

### Return type

[**FundamentalsResponse**](FundamentalsResponse.md)

### Authorization

[Query String](../README.md#Query String)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

