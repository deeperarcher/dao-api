import * as faker from 'faker';

import LIST from '../input-lists';

import { formatDate, fromList } from './utilities';

export default class IntakeConference {
  constructor() {
    this.DHSStatusAtArrest = fromList(LIST.DHSStatus);
    this.date = formatDate(faker.date.recent());
    this.intakeConferenceType = fromList(LIST.IntakeConferenceType);
    this.outcome = fromList(LIST.IntakeConferenceOutcome);
  }
}
