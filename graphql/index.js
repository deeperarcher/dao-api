import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';
import typeDefs from './types';

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

export { typeDefs, resolvers };
export default schema;
