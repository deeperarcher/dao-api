import { mergeTypeDefs } from 'graphql-tools';

import ArrestTypes from './domains/arrest/types';
import IncidentTypes from './domains/incident/types';
import PetitionTypes from './domains/petition/types';
import YouthTypes from './domains/youth/types';

import IntakeFormInput from './forms/intake-form/input';
import IntakeFormTypes from './forms/intake-form/types';

const typeDefs = [
  ...ArrestTypes,
  ...IncidentTypes,
  ...PetitionTypes,
  ...YouthTypes,
  ...IntakeFormInput,
  ...IntakeFormTypes,
];

export default mergeTypeDefs(typeDefs, { all: true });
