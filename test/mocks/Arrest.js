import * as faker from 'faker';

import { formatDate, intoArray } from './utilities';

export default class Arrest {
  constructor() {
    this.date = formatDate(faker.date.recent());
    this.district = faker.random.number(25).toString();
    this.isActiveAtTimeOfArrest = faker.random.boolean();
    this.officers = intoArray(3, () =>
      (faker.random.number(89999) + 10000).toString()
    );

    this.priorArrestCount = faker.random.number(5);
    this.referralDate = formatDate(faker.date.recent());
    this.SID = (faker.random.number(89999) + 10000).toString();
  }
}
