import * as faker from 'faker';

import { formatDate, intoArray } from './utilities';

export default class Diversion {
  constructor() {
    this.diversionType = faker.random.word();
    this.reasonsNoDiversion = intoArray(3, () => faker.random.words(2));
    this.referralDate = formatDate(faker.date.recent());
    this.referralSource = faker.random.word();
    this.YAPPanelDistrict = faker.random.number(20);
  }
}
