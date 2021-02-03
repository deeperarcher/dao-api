import {
  getIntakeForms,
  getListings,
  getListingsByPID,
  getOneIntakeForm,
} from '../../services';

export default {
  Query: {
    arrestsByGunInvolvement: async (_, { isGunInvolvedArrest }) => {
      const intakeForms = await getIntakeForms(_, { isGunInvolvedArrest });
      const listingsByPID = await getListingsByPID(intakeForms);

      return intakeForms.map(({ arrest, youth }) => ({
        ...arrest,
        youth: {
          ...youth,
          listings: listingsByPID[youth.PID] || [],
        },
      }));
    },
    intakeForm: getOneIntakeForm,
    intakeForms: getIntakeForms,
    listings: getListings,
    youth: async (_, { PID }) => {
      const intakeForms = await getIntakeForms({ PID });
      return intakeForms[0].youth;
    },
  },
};
