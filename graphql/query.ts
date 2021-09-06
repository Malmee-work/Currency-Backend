import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString
} from 'graphql';
import { graphqlCountryType, graphqlCountryResolver } from '../objects';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    countries: {
      type: new GraphQLNonNull(GraphQLList(graphqlCountryType)),
      args: {
        name: {
          type: GraphQLString,
          description: 'name or partial name of the country'
        }
      },
      resolve: graphqlCountryResolver
    }
  })
});

export default query;
