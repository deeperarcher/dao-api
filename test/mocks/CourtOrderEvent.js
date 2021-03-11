import * as faker from 'faker';

import LIST from '../input-lists';

import { fromList, intoArray } from './utilities';

export default class CourtOrderEvent {
  constructor({ petitions }) {
    // TODO: For Listings, include prior CourtOrderEvents to generate CONTINUE and DISCHARGE events
    this.eventType = 'ORDERED';
    this.isSupervision = faker.random.boolean();
    this.order = fromList(
      this.isSupervision ? LIST.SupervisionType : LIST.ConditionType
    );

    this.petitionNumbers = faker.random
      .arrayElements(petitions)
      .map(({ petitionNumber }) => petitionNumber);

    this.reasons = intoArray(3, () => faker.random.words(2));
    this.serviceProvider = { name: faker.random.words(2) };
  }
}
