import { Currency } from './currency-type';

export type Country = {
  name: string;
  pupulation?: string;
  currencies?: Array<Currency>;
};
