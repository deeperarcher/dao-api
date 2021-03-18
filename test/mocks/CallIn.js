import * as faker from 'faker';

import LIST from '../input-lists';

import { formatDate, fromList, intoArray } from './utilities';

export default class CallIn {
  constructor() {
    const wasDRAIAdministered = faker.random.boolean();

    this.date = formatDate(faker.date.recent());
    this.DRAIAction = wasDRAIAdministered ? fromList(LIST.DRAIAction) : null;
    this.DRAIScore = wasDRAIAdministered ? faker.random.number(12) : null;
    this.holdFacility = fromList(LIST.DetentionFacility);
    this.overrideHoldReasons = intoArray(3, () => faker.random.words(2));
    this.wasDRAIAdministered = wasDRAIAdministered;
  }
}
