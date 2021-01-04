import { reduceIntakeForms } from '../../forms/intake-form/utilities';

export function deriveYouth({ intakeForms, listings, petitionNumbers }) {
  const { arrests, incidents, legalStatusEvents, petitions } = reduceIntakeForms({intakeForms, petitionNumbers});

  return {
    dateOfBirth: intakeForms[0].dateOfBirth,
    firstName: intakeForms[0].firstName,
    lastName: intakeForms[0].lastName,
    PID: intakeForms[0].PID,
    arrests,
    incidents,
    legalStatusEvents,
    petitions,
  };
}
