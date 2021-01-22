import { mergeResolvers } from 'graphql-tools';

import IntakeFormResolver from './domains/IntakeForm/resolver';
import ListingResolver from './domains/Listing/resolver';
import YouthResolver from './domains/Youth/resolver';

const resolvers = [IntakeFormResolver, ListingResolver, YouthResolver];

export default mergeResolvers(resolvers, { all: true });
