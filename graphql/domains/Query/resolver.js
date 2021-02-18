import {
  getIntakeForms,
  getListings,
  getListingsByPID,
  getOneIntakeForm,
} from '../../services';

export default {
  Query: {
    arrestsByGunInvolvementCsv: async (_, { isGunInvolvedArrest }) => {
      const csvHeader = `district,PID,nextCourtroom,nextCourtDate`;
      const csvRows = [csvHeader];

      return await getListingsByPID({ isGunInvolvedArrest })
        .then(listingsByPID => {
          Object.entries(listingsByPID).forEach(async ([PID, listings]) => {
            const { arrest } = await getOneIntakeForm(_, {
              isGunInvolvedArrest,
              PID,
            });

            listings.forEach(({ nextListing }) => {
              csvRows.push(
                `${arrest.district},${PID},${nextListing.courtroom.name},${nextListing.date}`
              );
            });
          });
        })
        .then(() => csvRows.join('\n'));
    },
    intakeForm: getOneIntakeForm,
    intakeForms: getIntakeForms,
    listings: getListings,
    youth: async (_, { PID } = { PID: null }) => {
      return await getIntakeForms({ PID }).then(forms => forms[0].youth);
    },
    youths: async () => {
      return await getIntakeForms().then(forms =>
        forms.map(({ youth }) => youth)
      );
    },
  },
};
