import { reduceIntakeForms } from '../../forms/intake-form/utilities';
import { reduceListings } from '../../forms/listing/utilities';

export function deriveYouth({ intakeForms, listings, petitionNumbers }) {
  const { arrests, incidents, legalStatusEvents, petitions } = reduceIntakeForms({intakeForms, petitionNumbers});
  const {
    adjudications,
    admissions,
    certifications,
    continuances,
    courtOrderEvents,
    legalStatusEvents,
  } = reduceListings(listings);

  return {
    dateOfBirth: intakeForms[0].dateOfBirth,
    firstName: intakeForms[0].firstName,
    lastName: intakeForms[0].lastName,
    PID: intakeForms[0].PID,
    adjudications,
    admissions,
    arrests,
    certifications,
    continuances,
    courtOrderEvents,
    incidents,
    legalStatusEvents,
    listings,
    petitions,
  };
}
