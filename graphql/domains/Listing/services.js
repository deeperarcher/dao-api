import Listing from '../../../server/models/Listing';

export async function getListings(_, { PID }) {
  let response;
  const query = Listing.find({});

  if (PID) {
    query = Listing.find({ PID });
  }

  try {
    response = await query.exec();
  } catch (err) {
    console.error('Listing get fail:', err);
  }

  return response;
}

export async function insertListing(_, { input }) {
  const { ID } = await new Listing(input)
    .save()
    .catch(err => console.log('ERR', err));

  return ID;
}
