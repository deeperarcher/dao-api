import IntakeFormMock from '../test/mocks/IntakeForm';
import ListingMock from '../test/mocks/Listing';
import YouthMock from '../test/mocks/Youth';

import IntakeForm from './models/IntakeForm';
import Listing from './models/Listing';

export async function clearDB() {
  await Promise.all([
    IntakeForm.deleteMany({}).exec(),
    Listing.deleteMany({}).exec(),
  ]);

  return {
    intakeForms: [],
    listings: [],
  };
}

export async function seedDB(
  { numberOfIntakesPerYouth, numberOfListingsPerYouth, numberOfYouths } = {
    numberOfIntakesPerYouth: 1,
    numberOfListingsPerYouth: 3,
    numberOfYouths: 1,
  }
) {
  const intakeForms = [];
  const listings = [];

  new Array(numberOfYouths).fill().forEach(async () => {
    const youth = new YouthMock();
    const youthIntakeForms = [];

    new Array(numberOfIntakesPerYouth).fill().forEach(async () => {
      const intakeForm = new IntakeFormMock({ youth });

      youthIntakeForms.push(intakeForm);
    });

    new Array(numberOfListingsPerYouth).fill().forEach(async () => {
      const listing = new ListingMock({ intakeForms: youthIntakeForms, youth });

      listings.push(listing);
    });

    youthIntakeForms.forEach(form => intakeForms.push(form));
  });

  return {
    intakeForms,
    listings,
  };
}
