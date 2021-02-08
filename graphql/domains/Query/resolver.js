import {
  getIntakeForms,
  getListings,
  getListingsByPID,
  getOneIntakeForm,
} from '../../services';

export default {
  Query: {
    arrestsByGunInvolvementCsv: async (_, { isGunInvolvedArrest }) => {
      const intakeForms = await getIntakeForms(_, { isGunInvolvedArrest });
      const listingsByPID = await getListingsByPID(intakeForms);

      const csvRows = [`district,PID,nextCourtroom,nextCourtDate`];

      intakeForms.forEach(({ arrest, youth }) =>
        listingsByPID[youth.PID].forEach(({ nextListing }) =>
          csvRows.push(
            `${arrest.district},${youth.PID},${nextListing.courtroom.name},${nextListing.date}`
          )
        )
      );

      return csvRows.join('\n');
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
