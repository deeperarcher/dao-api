import {
  getIntakeForms,
  getListings,
  getOneIntakeForm,
  getYouth,
  getYouths,
} from '../../services';

export default {
  Query: {
    intakeForm: async (_, args) => await getOneIntakeForm(args),
    intakeForms: async (_, args) => await getIntakeForms(args),
    listings: async (_, args) => await getListings(args),
    youth: async (_, args) => await getYouth(args),
    youths: async (_, args) => await getYouths(args),
  },
};
