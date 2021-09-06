import { Country } from './country-type';
import getCountries from './data/get-countries';

type Args = {
  name?: string;
};

async function resolver(
  source: any,
  args: Args
): Promise<Array<Country> | Error> {
  return getCountries(args);
}

export default resolver;
