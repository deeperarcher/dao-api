import { mergeTypes } from 'merge-graphql-schemas';

import enums from '../enums';

import IntakeForm from './domains/forms/intake-form';

const formattedEnums = Object.keys(enums).map(
  key => `enum ${key} {
    ${enums[key].map(val => `${val} `)}
  }`
);

const typeDefs = [...formattedEnums, ...IntakeForm.typeDefs];

export default mergeTypes(typeDefs, { all: true });
