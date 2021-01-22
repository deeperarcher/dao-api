import { get as getIntakeForms } from '../IntakeForm/services';

export default {
  Query: {
    youth: async (_, { PID }) => {
      const intakeForms = await getIntakeForms({ PID });

      return { intakeForms, PID };
    },
  },
  // Youth: {
  //   address: ({ intakeForms }) => intakeForms[0].address,
  //   arrests: ({ intakeForms }) => {
  //     return intakeForms.map(form => ({
  //       date: form.arrestDate,
  //       district: form.arrestingDistrict,
  //       isGunCase: form.isGunCase,
  //       isGunInvolvedArrest: form.isGunInvolvedArrest,
  //       referralDate: form.referralDate,
  //       SID: form.SID,
  //     }));
  //   },
  //   dateOfBirth: ({ intakeForms }) => intakeForms[0].dateOfBirth,
  //   firstName: ({ intakeForms }) => intakeForms[0].firstName,
  //   grade: ({ intakeForms }) => intakeForms[0].grade,
  //   incidents: (root) => {
  //     return intakeForms.reduce(
  //       (accumulator, { incidents }) => [...accumulator, ...incidents],
  //       []
  //     );
  //   },
  //   isLatino: ({ intakeForms }) => intakeForms[0].isLatino,
  //   lastName: ({ intakeForms }) => intakeForms[0].lastName,
  //   phoneNumber: ({ intakeForms }) => intakeForms[0].phoneNumber,
  //   PID: ({ PID }) => PID,
  //   race: ({ intakeForms }) => intakeForms[0].race,
  //   school: ({ intakeForms }) => intakeForms[0].school,
  //   sex: ({ intakeForms }) => intakeForms[0].sex,
  //   zip: ({ intakeForms }) => intakeForms[0].zip,
  // },
};
