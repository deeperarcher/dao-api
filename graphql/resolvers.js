import { mergeResolvers } from 'graphql-tools';

import YouthResolver from './domains/youth/resolver';

import IntakeFormResolver from './forms/intake-form/resolver';
import ListingResolver from './forms/listing/resolver';

const resolvers = [IntakeFormResolver, ListingResolver, YouthResolver];

export default mergeResolvers(resolvers, { all: true });
