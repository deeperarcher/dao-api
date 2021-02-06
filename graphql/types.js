import { mergeTypeDefs } from 'graphql-tools';

import SeedTypes from './dev/seed/types';

import AdjudicationTypes from './domains/Adjudication/types';
import AdmissionTypes from './domains/Admission/types';
import ArrestTypes from './domains/Arrest/types';
import CertificationTypes from './domains/Certification/types';
import ChargeTypes from './domains/Charge/types';
import ChargeGradeEventTypes from './domains/ChargeGradeEvent/types';
import ContinuanceTypes from './domains/Continuance/types';
import CourtDateTypes from './domains/CourtDate/types';
import CourtOrderTypes from './domains/CourtOrder/types';
import CourtroomTypes from './domains/Courtroom/types';
import GuardianTypes from './domains/Guardian/types';
import IncidentTypes from './domains/Incident/types';
import IntakeFormTypes from './domains/IntakeForm/types';
import LegalStatusEventTypes from './domains/LegalStatusEvent/types';
import ListingTypes from './domains/Listing/types';
import PetitionTypes from './domains/Petition/types';
import ServiceProviderTypes from './domains/ServiceProvider/types';
import VictimTypes from './domains/Victim/types';
import YouthTypes from './domains/Youth/types';

const typeDefs = [
  ...AdjudicationTypes,
  ...AdmissionTypes,
  ...ArrestTypes,
  ...CertificationTypes,
  ...ChargeTypes,
  ...ChargeGradeEventTypes,
  ...ContinuanceTypes,
  ...CourtDateTypes,
  ...CourtOrderTypes,
  ...CourtroomTypes,
  ...GuardianTypes,
  ...IncidentTypes,
  ...IntakeFormTypes,
  ...LegalStatusEventTypes,
  ...ListingTypes,
  ...PetitionTypes,
  ...ServiceProviderTypes,
  ...VictimTypes,
  ...YouthTypes,
];

if (process.env.NODE_ENV !== 'production') {
  typeDefs.push(SeedTypes);
}

export default mergeTypeDefs(typeDefs, { all: true });
