import { mergeTypeDefs } from 'graphql-tools';

import IntakeFormTypes from './forms/intake-form/types';
import IntakeFormInput from './forms/intake-form/input';

const typeDefs = [...IntakeFormInput, ...IntakeFormTypes];

export default mergeTypeDefs(typeDefs, { all: true });
