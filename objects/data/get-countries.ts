import axios from 'axios';
import config from '../../config';
import { Country } from '../country-type';
type Args = {
  name?: string;
};

async function getCountries(args: Args): Promise<Array<Country> | Error> {
  try {
    let url = '?fields=name;population;currencies';
    if (args.name) {
      const parsedName = args.name
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
      url = `name/${parsedName}${url}`;
    } else {
      url = `all${url}`;
    }

    const countries = await axios.get<Array<Country>>(
      `${config.COUNTRIES_URL}${url}`
    );
    return countries && countries.data;
  } catch (err) {
    return new Error('Error occured when retrieving countries list');
  }
}

export default getCountries;
