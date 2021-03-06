import * as faker from 'faker';

import { formatDate, intoArray } from './utilities';

export default class Arrest {
  constructor() {
    this.date = faker.date.recent().toString();
    this.district = faker.random.number(25).toString();
    this.isGunCase = faker.random.boolean();
    this.isGunInvolvedArrest = faker.random.boolean();
    this.officers = intoArray(3, () =>
      (faker.random.number(89999) + 10000).toString()
    ); // payroll #

    this.referralDate = formatDate(faker.date.recent());
    this.SID = (faker.random.number(89999) + 10000).toString();
  }
}
