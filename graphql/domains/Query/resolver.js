import {
  getIntakeForms,
  getInputIDDirectory,
  getLegacyExport,
  getListings,
  getOneIntakeForm,
  getYouth,
  getYouths,
} from '../../services';

export default {
  Query: {
    inputIDDirectory: async () => await getInputIDDirectory(),
    intakeForm: async (_, args) => await getOneIntakeForm(args),
    intakeForms: async (_, args) => await getIntakeForms(args),
    legacyExport: async () => await getLegacyExport(),
    listings: async (_, args) => await getListings(args),
    youth: async (_, args) => await getYouth(args),
    youths: async (_, args) => await getYouths(args),
  },
};
