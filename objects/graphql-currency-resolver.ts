import config from '../config';
import { Country } from './country-type';
import { Currency } from './currency-type';
import getExchangeRates from './data/get-exchange-rates';

async function resolver(
  source: Country
): Promise<Array<Currency> | undefined | Error> {
  const currencyString = source.currencies
    ?.map((currency) => currency.code)
    .join();
  if (currencyString) {
    const exchangeRates = await getExchangeRates(currencyString);
    if (exchangeRates instanceof Map) {
      const baseCurrencyExchangeRate = Number(
        exchangeRates.get(config.BASE_CURRENCY)
      );
      return source.currencies?.map((currency) => ({
        ...currency,
        rate: currency.code
          ? Number(exchangeRates.get(currency.code)) / baseCurrencyExchangeRate
          : undefined
      }));
    }
  }
  return source.currencies;
}

export default resolver;
