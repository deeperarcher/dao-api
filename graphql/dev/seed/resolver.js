import { seedDB, clearDB } from '../../../server/utilities';

export default {
  Mutation: {
    clear: clearDB,
    seed: async args => {
      try {
        return await seedDB(args);
      } catch (e) {
        console.error('seed mutation error', e);
        return null;
      }
    },
  },
};
