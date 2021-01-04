import Listing from '../../../server/models/listing';

export async function get({PID}) {
  let response;

  const query = Listing.find({ PID });

  try {
    response = await query.exec();
  } catch (err) {
    console.error('Listing get fail:', err);
  }

  return response.map(listing => listing.toObject());
}
