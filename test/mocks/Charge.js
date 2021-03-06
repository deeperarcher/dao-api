import * as faker from 'faker';

import LIST from '../input-lists';

import { fromList } from './utilities';

export default class Charge {
  constructor(isLead, petitionNumber) {
    this.code = faker.random.alphaNumeric(5);
    this.ID = `${petitionNumber}${this.code}`;
    this.name = faker.name.jobTitle();
    this.isLead = isLead;
    this.grade = fromList(LIST.ChargeGrade);
    this.category = fromList(LIST.ChargeCategory);
  }
}
