import IntakeForm from '../../../server/models/IntakeForm';
import Listing from '../../../server/models/Listing';
import { clearDB } from '../../../server/utilities';
import Youth from '../../../test/mocks/Youth';

export default {
  Mutation: {
    seed: async (parent, { input }) => {
      const {
        intakesPerYouth,
        listingsPerYouth,
        shouldClearFirst,
        youthCount,
      } = input;
      try {
        if (shouldClearFirst) await clearDB();

        const youths = new Array(youthCount).fill().map(() => new Youth());
        const IntakeForms = await Promise.all(
          youths.flatMap(y => [
            ...new Array(intakesPerYouth)
              .fill()
              .map(async () => await IntakeForm.create(y.generateIntakeData())),
          ])
        );
        const Listings = await Promise.all(
          youths.flatMap(y =>
            y
              .generateListings(listingsPerYouth)
              .map(async data => await Listing.create(data))
          )
        );
        return { IntakeForms, Listings };
      } catch (e) {
        console.error('seed mutation error', e);
        return null;
      }
    },
  },
};
