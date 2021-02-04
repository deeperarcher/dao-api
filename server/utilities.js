import IntakeForm from './models/IntakeForm';
import Listing from './models/Listing';

export async function clearDB() {
  return Promise.all([
    IntakeForm.deleteMany({}).exec(),
    Listing.deleteMany({}).exec(),
  ]);
}
