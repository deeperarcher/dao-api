import { getListings, insertListing } from './services';

export default {
  Query: {
    listings: getListings,
  },
  Mutation: {
    insertListing: insertListing,
  },
};
