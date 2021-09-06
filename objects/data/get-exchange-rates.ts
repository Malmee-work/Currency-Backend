import axios from 'axios';
import config from '../../config';

async function getExchangeRates(
  symbols: string
): Promise<Map<string, string> | Error> {
  try {
    const exchangeRates = await axios.get(
      `${config.EXCHANGE_RATE_URL}?access_key=${
        config.EXCHANGE_RATE_KEY
      }&symbols=${symbols + ',' + config.BASE_CURRENCY}`
    );
    return (
      exchangeRates.data &&
      exchangeRates.data.rates &&
      new Map(Object.entries(exchangeRates.data.rates))
    );
  } catch (err) {
    return new Error('Error occured when retrieving exchange rates');
  }
}

export default getExchangeRates;
