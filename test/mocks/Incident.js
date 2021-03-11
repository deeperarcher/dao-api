import * as faker from 'faker';

import LIST from '../input-lists';

import { formatDate, fromList } from './utilities';

export default class Incident {
  constructor({ petitionNumber }) {
    this.address = faker.address.streetAddress();
    this.date = formatDate(faker.date.recent());
    this.district = faker.random.number(25).toString();
    this.ID = (
      petitionNumber +
      this.address.substr(0, 10) +
      this.date.substr(0, 10)
    )
      .replace(/\s/g, '')
      .toUpperCase();

    this.incidentType = fromList(LIST.IncidentType);
    this.isTimeKnown = faker.random.boolean();
    this.petitionNumber = petitionNumber;
    this.zip = faker.address.zipCodeByState('PA');
  }
}
