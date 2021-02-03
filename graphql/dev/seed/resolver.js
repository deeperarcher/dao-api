import { seedDB, clearDB } from '../../../server/utilities';

export default {
  Mutation: {
    seed: async (
      _,
      {
        numberOfIntakesEach,
        numberOfListingsEach,
        numberOfYouths,
        shouldClearFirst,
      }
    ) => {
      try {
        if (shouldClearFirst) await clearDB();

        return await seedDB({
          numberOfIntakesEach,
          numberOfListingsEach,
          numberOfYouths,
        });
      } catch (e) {
        console.error('seed mutation error', e);
        return null;
      }
    },
  },
};
