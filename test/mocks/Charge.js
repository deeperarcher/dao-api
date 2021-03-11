import * as faker from 'faker';

import LIST from '../input-lists';

import { fromList } from './utilities';

export default class Charge {
  constructor({ isLead, petitionNumber }) {
    const { DESCRIPTION: name, CODE: code } = faker.random.arrayElement(
      LIST.ChargeCodes
    );

    this.code = code;
    this.ID = `${petitionNumber}${this.code}`;
    this.name = name;
    this.isLead = isLead;
    this.grade = fromList(LIST.ChargeGrade);
    this.category = fromList(LIST.ChargeCategory);
    this.petitionNumber = petitionNumber;
  }
}
