import { seedDB, clearDB } from '../../../server/utilities';

export default {
  Mutation: {
    clear: clearDB,
    seed: async (_, args) => {
      try {
        return await seedDB(args.input);
      } catch (e) {
        console.error('seed mutation error', e);
        return null;
      }
    },
  },
};
