import {
  getIntakeForms,
  getListings,
  getOneIntakeForm,
  getYouths,
} from '../../services';

export default {
  Query: {
    intakeForm: async (_, args) => await getOneIntakeForm(args),
    intakeForms: async (_, args) => await getIntakeForms(args),
    listings: async (_, args) => await getListings(args),
    youth: async (_, args) => {
      return await getIntakeForms(args).then(forms => forms[0].youth);
    },
    youths: async (_, args) => await getYouths(args),
  },
};
