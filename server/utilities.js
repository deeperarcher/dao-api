import IntakeForm from './models/IntakeForm';
import Listing from './models/Listing';

import IntakeFormMock from '../test/mocks/IntakeForm';
import ListingMock from '../test/mocks/Listing';
import YouthMock from '../test/mocks/Youth';

export async function clearDB() {
  return Promise.all([
    IntakeForm.deleteMany({}).exec(),
    Listing.deleteMany({}).exec(),
  ]);
}
export async function seedDB(
  { numberOfIntakesEach, numberOfListingsEach, numberOfYouths } = {
    numberOfIntakesEach: 2,
    numberOfListingsEach: 5,
    numberOfYouths: 1,
  }
) {
  const intakeForms = [];
  const listings = [];

  new Array(numberOfYouths).fill().forEach(async () => {
    const youth = new YouthMock();

    new Array(numberOfIntakesEach).fill().forEach(async () => {
      const intakeForm = await new IntakeFormMock({ youth });
      intakeForms.push(intakeForm);

      new Array(numberOfListingsEach).fill().forEach(async () => {
        const listing = await new ListingMock({ intakeForm, youth });
        listings.push(listing);
      });
    });
  });

  return {
    intakeForms,
    listings,
  };
}
