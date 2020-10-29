import { mergeTypeDefs } from 'graphql-tools';

import enums from '../enums';

import IntakeFormTypes from './forms/intake-form/types';
import IntakeFormInput from './forms/intake-form/input';

const formattedEnums = Object.keys(enums).map(
  key => `enum ${key} {
    ${Object.keys(enums[key]).map(val => `${val} `)}
  }`
);

const typeDefs = [...IntakeFormInput, ...IntakeFormTypes, ...formattedEnums];

export default mergeTypeDefs(typeDefs, { all: true });
