import Listing from '../../../server/models/listing';

export default {
  Query: {
    listing: async (parent, { _id }, context, info) =>
      await Listing.findOne({ _id }).exec(),
    listings: async (parent, args, context, info) =>
      await Listing.find({}).populate().exec(),
  },
  Mutation: {
    insertListing: async (parent, args, context, info) => {
      const newListing = await new Listing(args.input);

      return newListing.save().catch(err => console.log('ERR', err));
    },
  },
};
