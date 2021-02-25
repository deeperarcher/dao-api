import { insertListing } from '../../services';

export default {
  Mutation: {
    insertListing: (_, args) => insertListing(args),
  },
};
