import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from 'graphql';
import graphqlCurrencyResolver from './graphql-currency-resolver';
import GraphQLCurrency from './graphql-currency-type';

const GraphQLCountry = new GraphQLObjectType({
  name: 'Country',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Name of the country'
    },

    population: {
      type: GraphQLInt,
      description: 'Population of the country'
    },

    currencies: {
      type: new GraphQLList(GraphQLCurrency),
      description: 'List of currencies of the country',
      resolve: graphqlCurrencyResolver
    }
  })
});

export default GraphQLCountry;
