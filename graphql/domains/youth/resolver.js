import { get as getIntakeForms } from '../../forms/intake-form/services';
import { get as getListings } from '../../forms/listing/services';
import { deriveYouth } from './utilities';

export default {
  Query: {
    youth: async (parent, { PID }, context, info) => {
      const intakeForms = await getIntakeForms({ PID });
      const listings = await getListings({ PID });

      return deriveYouth({ intakeForms, listings });
    },
  },
};
