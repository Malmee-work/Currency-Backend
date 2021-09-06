import { GraphQLObjectType, GraphQLString, GraphQLFloat } from 'graphql';

const GraphQLCurrency = new GraphQLObjectType({
  name: 'Currency',
  fields: () => ({
    code: {
      type: GraphQLString,
      description: 'Code of the currency'
    },
    name: {
      type: GraphQLString,
      description: 'Name of the currency'
    },
    rate: {
      type: GraphQLFloat,
      description: 'Exchange rate of the currency to base currency'
    }
  })
});

export default GraphQLCurrency;
