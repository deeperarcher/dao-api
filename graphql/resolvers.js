import { mergeResolvers } from 'merge-graphql-schemas';

import IntakeForm from './domains/forms/intake-form';

const resolvers = [IntakeForm.resolver];

export default mergeResolvers(resolvers, { all: true });
