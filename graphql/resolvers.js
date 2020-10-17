import { mergeResolvers } from 'merge-graphql-schemas';

import IntakeFormResolver from './domains/forms/intake-form/resolver';

const resolvers = [IntakeFormResolver];

export default mergeResolvers(resolvers, { all: true });
