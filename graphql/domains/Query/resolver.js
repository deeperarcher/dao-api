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
      intakeForms &&
        intakeForms.forEach(({ arrest, youth }) => {
          console.log(listingsByPID[youth.PID]);
          listingsByPID[youth.PID] &&
            listingsByPID[youth.PID].forEach(({ nextListing }) =>
              csvRows.push(
                `${arrest.district},${youth.PID},${nextListing.courtroom.name},${nextListing.date}`
              )
            );
        });

      return csvRows.join('\n');
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
