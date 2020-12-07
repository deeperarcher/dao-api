import { mergeResolvers } from 'graphql-tools';

import YouthResolver from './domains/youth/resolver';

import IntakeFormResolver from './forms/intake-form/resolver';

const resolvers = [
    IntakeFormResolver,
    YouthResolver
];

export default mergeResolvers(resolvers, { all: true });
