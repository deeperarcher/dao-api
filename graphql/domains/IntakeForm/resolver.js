import { getIntakeForms, getOneIntakeForm, insertIntakeForm } from './services';

function expandRedundancies(thing) {
  // key off if you have petitionNumbers or chargeIDs to determine how you traverse
  return thing.flatMap(
    ({
      eventType,
      isSupervision,
      order,
      petitionNumbers,
      reasons,
      serviceProvider,
    }) =>
      petitionNumbers.map(petitionNumber => ({
        eventType,
        isSupervision,
        order,
        reasons,
        serviceProvider,
        petitionNumber,
      }))
  );
}

export default {
  Query: {
    intakeForm: getOneIntakeForm,
    intakeForms: getIntakeForms,
  },
  Mutation: {
    insertIntakeForm: insertIntakeForm,
  },
};
