import * as faker from 'faker';

import ListingModel from '../../server/models/Listing';

import CourtDate from './CourtDate';
import { intoArray } from './utilities';

export default class Listing {
  constructor({ intakeForms, youth }) {
    const chargeIDs = intakeForms
      .map(({ charges }) => charges)
      .map(({ ID }) => ID);
    const petitionNumbers = intakeForms
      .map(({ petitions }) => petitions)
      .map(({ petitionNumber }) => petitionNumber);
    const courtDate = new CourtDate();

    this.adjudications = [
      {
        chargeIDs: faker.random.arrayElements(chargeIDs),
        date: courtDate.date,
        reasons: intoArray(3, () => faker.random.words(2)),
      },
    ];

    this.admissions = [
      {
        chargeIDs: faker.random.arrayElements(chargeIDs),
        date: courtDate.date,
        result: faker.random.words(2),
      },
    ];

    this.certifications = [
      {
        date: courtDate.date,
        petitionNumbers: faker.random.arrayElements(petitionNumbers),
      },
    ];

    this.chargeGradeEvents = [
      {
        chargeIDs: faker.random.arrayElements(chargeIDs),
        date: courtDate.date,
        grade: faker.random.words(2),
      },
    ];

    this.continuances = [
      {
        continuanceType: 'the good type',
        date: courtDate.date,
        listingStatus: faker.random.words(2),
        petitionNumbers: faker.random.arrayElements(petitionNumbers),
        reasons: intoArray(3, () => faker.random.words(2)),
      },
    ];

    this.courtDate = courtDate;
    this.courtOrderEvents = [
      {
        date: courtDate.date,
        eventType: 'ORDERED',
        isSupervision: false,
        order: 'the order',
        petitionNumbers: faker.random.arrayElements(petitionNumbers),
        reasons: intoArray(3, () => faker.random.words(2)),
        serviceProvider: faker.random.words(2),
      },
    ];

    this.DA = faker.name.lastName();
    this.legalStatusEvents = [
      {
        date: courtDate.date,
        dischargeNature: 'the good type',
        dischargeOutcome: 'the good type',
        eventType: 'the good type',
        petitionNumbers: faker.random.arrayElements(petitionNumbers),
        reasons: intoArray(3, () => faker.random.words(2)),
        status: faker.random.words(2),
      },
    ];

    this.listingType = 'the good type';
    this.nextListing = new CourtDate();
    this.note = faker.lorem.words(20);
    this.PID = (youth && youth.PID) || faker.random.number(10000).toString();
  }
  async save() {
    await ListingModel.create(this);
  }
}
