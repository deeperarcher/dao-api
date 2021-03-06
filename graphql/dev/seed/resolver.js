import { seedDB, clearDB } from '../../../server/utilities';

export default {
  Mutation: {
    clear: async () => clearDB(),
    seed: async (_, args) => {
      try {
        return await seedDB(args);
      } catch (e) {
        console.error('seed mutation error', e);

        return null;
      }
    },
  },
};
