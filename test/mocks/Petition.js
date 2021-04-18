import * as faker from 'faker';

import { formatDate } from './utilities';
export default class Petition {
  constructor() {
    this.dateFiled = formatDate(faker.date.recent());
    this.isDiverted = faker.random.boolean();
    this.isDirectFiled = faker.random.boolean();
    this.isGunCase = faker.random.boolean();
    this.isGunInvolved = faker.random.boolean();
    this.isTransferFromOtherCounty = faker.random.boolean();
    this.petitionNumber = faker.random.number(10000).toString();
  }
}
