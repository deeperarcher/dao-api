import { seedDB, clearDB } from '../../../server/utilities';

export default {
  Mutation: {
    clear: async () => clearDB(),
    seed: async (_, { input }) => {
      try {
        return await seedDB(input);
      } catch (e) {
        console.error('seed mutation error', e);

        return null;
      }
    },
  },
};
