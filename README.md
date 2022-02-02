# Equibles Stocks API for Javascript

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install equibles_stocks --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/equibles/stocks-javascript
then install it via:

```shell
    npm install equibles/stocks-javascript --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var EquiblesStocks = require('equibles_stocks');
var defaultClient = EquiblesStocks.ApiClient.instance;

// Configure API key authorization: Query String
var Query String = defaultClient.authentications['Query String'];
Query String.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Query String.apiKeyPrefix['ApiKey'] = "Token"

var api = new EquiblesStocks.ExchangesApi()
api.currencies().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

## Documentation for API Endpoints

All URIs are relative to *https://api.equibles.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*EquiblesStocks.ExchangesApi* | [**currencies**](docs/ExchangesApi.md#currencies) | **GET** /stocks/exchanges/currencies | Get the list of all the currencies supported by this API.
*EquiblesStocks.ExchangesApi* | [**list**](docs/ExchangesApi.md#list) | **GET** /stocks/exchanges/list | Get the list of all the exchanges supported by this API.
*EquiblesStocks.ExchangesApi* | [**stocks**](docs/ExchangesApi.md#stocks) | **GET** /stocks/exchanges/stocks | Get all the stocks for a given exchange.
*EquiblesStocks.FundamentalsApi* | [**dividends**](docs/FundamentalsApi.md#dividends) | **GET** /stocks/fundamentals/dividends | Get the dividends for a given stock.
*EquiblesStocks.FundamentalsApi* | [**financialReports**](docs/FundamentalsApi.md#financialReports) | **GET** /stocks/fundamentals/financialreports | Get the financial statements for a given stock.
*EquiblesStocks.MetricsApi* | [**priceToEarnings**](docs/MetricsApi.md#priceToEarnings) | **GET** /stocks/metrics/pricetoearnings | Get the price to earnings ratio over time for this stock.
*EquiblesStocks.NewsApi* | [**list**](docs/NewsApi.md#list) | **GET** /stocks/news/list | Get the latest news for this stock.
*EquiblesStocks.NewsApi* | [**publishers**](docs/NewsApi.md#publishers) | **GET** /stocks/news/publishers | Get all the available news publishers.
*EquiblesStocks.PerformanceApi* | [**list**](docs/PerformanceApi.md#list) | **GET** /stocks/performance/list | Lists the performance for a given stock.
*EquiblesStocks.PricesApi* | [**endOfDay**](docs/PricesApi.md#endOfDay) | **GET** /stocks/prices/endofday | Lists the end of day prices for a given stock.
*EquiblesStocks.PricesApi* | [**intraday**](docs/PricesApi.md#intraday) | **GET** /stocks/prices/intraday | Lists the intraday prices for a given stock with one minute precision.
*EquiblesStocks.SectorsApi* | [**list**](docs/SectorsApi.md#list) | **GET** /stocks/sectors/list | Lists all the sectors.
*EquiblesStocks.SectorsApi* | [**searchStocks**](docs/SectorsApi.md#searchStocks) | **GET** /stocks/sectors/searchstocks | Lists and the stock in a given sector/industry.
*EquiblesStocks.StocksApi* | [**list**](docs/StocksApi.md#list) | **GET** /stocks/list | Get a list of all the available stocks.
*EquiblesStocks.StocksApi* | [**officers**](docs/StocksApi.md#officers) | **GET** /stocks/officers | Get the officers of the company.
*EquiblesStocks.StocksApi* | [**profile**](docs/StocksApi.md#profile) | **GET** /stocks/profile | The profile of this stock.
*EquiblesStocks.StocksApi* | [**screener**](docs/StocksApi.md#screener) | **POST** /stocks/screener | Get a list of stocks constraint to several criteria.
*EquiblesStocks.StocksApi* | [**search**](docs/StocksApi.md#search) | **GET** /stocks/search | Search among all the available stocks.
*EquiblesStocks.StocksApi* | [**splits**](docs/StocksApi.md#splits) | **GET** /stocks/splits | Get all the splits for a given stock.
*EquiblesStocks.TransactionsApi* | [**insiders**](docs/TransactionsApi.md#insiders) | **GET** /stocks/transactions/insiders | Lists the insider transactions for a given stock.
*EquiblesStocks.TransactionsApi* | [**institutional**](docs/TransactionsApi.md#institutional) | **GET** /stocks/transactions/institutional | Lists the institutional transactions for a given stock.

## Documentation for Models

 - [EquiblesStocks.AssetType](docs/AssetType.md)
 - [EquiblesStocks.BalanceSheet](docs/BalanceSheet.md)
 - [EquiblesStocks.CashFlowStatement](docs/CashFlowStatement.md)
 - [EquiblesStocks.CurrenciesResponse](docs/CurrenciesResponse.md)
 - [EquiblesStocks.Currency](docs/Currency.md)
 - [EquiblesStocks.Dividend](docs/Dividend.md)
 - [EquiblesStocks.DividendsResponse](docs/DividendsResponse.md)
 - [EquiblesStocks.Exchange](docs/Exchange.md)
 - [EquiblesStocks.ExchangesResponse](docs/ExchangesResponse.md)
 - [EquiblesStocks.FinancialAssetsResponse](docs/FinancialAssetsResponse.md)
 - [EquiblesStocks.FinancialReport](docs/FinancialReport.md)
 - [EquiblesStocks.FiscalPeriod](docs/FiscalPeriod.md)
 - [EquiblesStocks.FundamentalsResponse](docs/FundamentalsResponse.md)
 - [EquiblesStocks.Image](docs/Image.md)
 - [EquiblesStocks.IncomeStatement](docs/IncomeStatement.md)
 - [EquiblesStocks.Industry](docs/Industry.md)
 - [EquiblesStocks.MetricNullablePointsResponse](docs/MetricNullablePointsResponse.md)
 - [EquiblesStocks.News](docs/News.md)
 - [EquiblesStocks.NewsResponse](docs/NewsResponse.md)
 - [EquiblesStocks.NullablePoint](docs/NullablePoint.md)
 - [EquiblesStocks.Officer](docs/Officer.md)
 - [EquiblesStocks.OfficersResponse](docs/OfficersResponse.md)
 - [EquiblesStocks.Performance](docs/Performance.md)
 - [EquiblesStocks.PerformanceResponse](docs/PerformanceResponse.md)
 - [EquiblesStocks.Price](docs/Price.md)
 - [EquiblesStocks.PricesResponse](docs/PricesResponse.md)
 - [EquiblesStocks.Publisher](docs/Publisher.md)
 - [EquiblesStocks.PublishersResponse](docs/PublishersResponse.md)
 - [EquiblesStocks.Recommendation](docs/Recommendation.md)
 - [EquiblesStocks.ResponseStatus](docs/ResponseStatus.md)
 - [EquiblesStocks.ScreenerRequest](docs/ScreenerRequest.md)
 - [EquiblesStocks.Sector](docs/Sector.md)
 - [EquiblesStocks.SectorsResponse](docs/SectorsResponse.md)
 - [EquiblesStocks.SplitsResponse](docs/SplitsResponse.md)
 - [EquiblesStocks.StockProfile](docs/StockProfile.md)
 - [EquiblesStocks.StockProfileResponse](docs/StockProfileResponse.md)
 - [EquiblesStocks.StockProfilesResponse](docs/StockProfilesResponse.md)
 - [EquiblesStocks.StockSplit](docs/StockSplit.md)
 - [EquiblesStocks.Transaction](docs/Transaction.md)
 - [EquiblesStocks.TransactionType](docs/TransactionType.md)
 - [EquiblesStocks.TransactionsResponse](docs/TransactionsResponse.md)

## Documentation for Authorization


### Query String

- **Type**: API key
- **API key parameter name**: ApiKey
- **Location**: URL query string

## Author
[Equibles](https://www.equibles.com)\
equibles@gmail.com
