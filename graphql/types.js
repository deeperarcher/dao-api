import { mergeTypes } from 'merge-graphql-schemas';

import enums from '../enums';

import IntakeFormTypes from './domains/forms/intake-form/types';
import IntakeFormInput from './domains/forms/intake-form/input';

const formattedEnums = Object.keys(enums).map(
  key => `enum ${key} {
    ${enums[key].map(val => `${val} `)}
  }`
);

const typeDefs = [IntakeFormInput, IntakeFormTypes, ...formattedEnums];

export default mergeTypes(typeDefs, { all: true });
