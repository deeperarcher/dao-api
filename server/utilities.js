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

  new Array(numberOfYouths).fill().forEach(() => {
    const youth = new YouthMock();
    const youthIntakeForms = [];

    new Array(numberOfIntakesPerYouth).fill().forEach(() => {
      youthIntakeForms.push(new IntakeFormMock({ youth }));
    });

    new Array(numberOfListingsPerYouth).fill().forEach(() => {
      listings.push(new ListingMock({ intakeForms: youthIntakeForms, youth }));
    });

    youthIntakeForms.forEach(form => intakeForms.push(form));
  });

  try {
    await Promise.all(
      [...intakeForms, ...listings].map(async form => await form.save())
    );
  } catch (e) {
    return console.error('seed error', e);
  }

  return {
    intakeForms,
    listings,
  };
}
