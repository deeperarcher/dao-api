import IntakeForm from '../../../server/models/intake-form';

import { deriveArrest, deriveIncidents, derivePetitions } from './utilities';

function deriveYouth(intakeFormsByPID) {
  return intakeFormsByPID.reduce(
    (lastForm, thisForm) => ({
      dateOfBirth: thisForm.dateOfBirth,
      firstName: thisForm.firstName,
      lastName: thisForm.lastName,
      PID: thisForm.PID,
      arrests: [...lastForm.arrests, deriveArrest(thisForm)],
      incidents: [...lastForm.incidents, ...deriveIncidents(thisForm)],
      petitions: [...lastForm.petitions, ...derivePetitions(thisForm)],
    }),
    {
      arrests: [],
      courtOrderEvents: [],
      incidents: [],
      petitions: [],
    }
  );
}

export default {
  Query: {
    youth: async (parent, { PID }, context, info) => {
      const intakeForms = await IntakeForm.find({ PID }).exec();

      return deriveYouth(intakeForms);
    },
  },
};
