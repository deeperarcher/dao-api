import * as faker from 'faker';

import { intoArray } from './utilities';
import CourtOrder from './CourtOrder';

class Listing {
  constructor(youth) {
    const {
      chargeIDs,
      nextListingDate,
      nextListingLocation,
      petitions,
    } = youth;
    const petitionNumbers = petitions.map(p => p.petitionNumber);

    this.PID = youth.PID;
    this.courtroom = nextListingLocation;
    this.date = nextListingDate;
    this.DA = faker.name.lastName();
    this.ID = faker.random.number(10000).toString();

    this.adjudications = [
      {
        chargeIDs: faker.random.arrayElements(chargeIDs),
        date: nextListingDate,
        reasons: intoArray(3, () => faker.random.words(2)),
      },
    ];

    this.admissions = [
      {
        chargeIDs: faker.random.arrayElements(chargeIDs),
        date: nextListingDate,
        result: faker.random.words(2),
      },
    ];

    this.certifications = [
      {
        date: nextListingDate,
        petitionNumbers: faker.random.arrayElements(petitionNumbers),
      },
    ];

    this.continuances = [
      {
        date: nextListingDate,
        listingStatus: faker.random.words(2),
        petitionNumbers: faker.random.arrayElements(petitionNumbers),
        reasons: intoArray(3, () => faker.random.words(2)),
      },
    ];

    this.courtOrders = intoArray(3, () => new CourtOrder(petitionNumbers));

    this.notes = faker.lorem.words(20);
  }
}

export default Listing;
