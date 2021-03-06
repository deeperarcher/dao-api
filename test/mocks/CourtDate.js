import * as faker from 'faker';

import LIST from '../input-lists';

import { formatDate, fromList } from './utilities';

class Courtroom {
  constructor() {
    this.name = fromList(LIST.Courtroom);
  }
}

export default class CourtDate {
  constructor() {
    this.courtroom = new Courtroom();
    this.date = formatDate(faker.date.soon());
  }
}
