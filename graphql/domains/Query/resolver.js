import {
  getIntakeForms,
  getListings,
  getListingsByPID,
  getOneIntakeForm,
  getYouths,
} from '../../services';

export default {
  Query: {
    arrestsByGunInvolvementCsv: async (_, { isGunInvolvedArrest }) => {
      // get petitionNumbers from all intakeForms of X gunInvolvement
      const listingsByPID = await getListingsByPID({ isGunInvolvedArrest });
      const csvRows = await Promise.all(Object.entries(listingsByPID).map(async ([PID, listings]) => {
        const intakeForms = await getIntakeForms({
          isGunInvolvedArrest,
          PID,
        });
        const arrests = intakeForms.map(({ arrest}) => arrest);
        // get petitionNumbers from arrests

        const csvRowsForOnePID = listings.map(
          ({ nextListing }) =>
            `${intakeForm.arrest.district},${PID},${nextListing.courtroom.name},${nextListing.date}`
        );
        
        console.log(csvRowsForOnePID.join('\n'))
        return csvRowsForOnePID.join('\n');
      }));

      return [
        `district,PID,nextCourtroom,nextCourtDate`,
        csvRows.join('\n'),
      ].join('\n');
    },
    intakeForm: async (_, args) => await getOneIntakeForm(args),
    intakeForms: async (_, args) => await getIntakeForms(args),
    listings: async (_, args) => await getListings(args),
    youth: async (_, args) => {
      return await getIntakeForms(args).then(forms => forms[0].youth);
    },
    youths: async (_, args) => await getYouths(args),
  },
};
