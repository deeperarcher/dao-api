import { mergeResolvers } from 'graphql-tools';

import SeedResolver from './dev/seed/resolver';

import IntakeFormResolver from './domains/IntakeForm/resolver';
import ListingResolver from './domains/Listing/resolver';
import YouthResolver from './domains/Youth/resolver';

const resolvers = [IntakeFormResolver, ListingResolver, YouthResolver];

if (process.env.NODE_ENV !== 'production') {
  resolvers.push(SeedResolver);
}

export default mergeResolvers(resolvers, { all: true });
