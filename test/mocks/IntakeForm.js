import * as faker from 'faker';

import IntakeFormModel from '../../server/models/IntakeForm';

import Arrest from './Arrest';
import CallIn from './CallIn';
import Charge from './Charge';
import CourtDate from './CourtDate';
import CourtOrderEvent from './CourtOrderEvent';
import Diversion from './Diversion';
import Evaluation from './Evaluation';
import Incident from './Incident';
import IntakeConference from './IntakeConference';
import Petition from './Petition';
import Victim from './Victim';
import Youth from './Youth';
import { intoArray } from './utilities';

export default class IntakeForm {
  constructor({ youth }) {
    const petitions = intoArray(3, () => new Petition());

    this.arrest = new Arrest();
    this.callIn = new CallIn();
    this.charges = petitions.flatMap(({ petitionNumber }) =>
      intoArray(3, (_, i) => new Charge({ isLead: i === 0, petitionNumber }))
    );

    this.courtOrderEvents = intoArray(
      3,
      () => new CourtOrderEvent({ petitions })
    );

    this.DA = faker.name.lastName();
    this.diversion = new Diversion();
    this.evaluation = new Evaluation();
    this.incidents = petitions.map(({ petitionNumber }, i) => {
      const incident = new Incident({ petitionNumber });

      petitions[i].incidentID = incident.ID;

      return incident;
    });

    this.initialHearing = new CourtDate();
    this.intakeConference = new IntakeConference();
    this.note = faker.lorem.words(20);
    this.petitions = petitions;
    this.victims = petitions.reduce(
      (acc, { petitionNumber }) =>
        faker.random.boolean() ? [...acc, new Victim({ petitionNumber })] : acc,
      []
    );

    this.youth = youth || new Youth();
  }

  async save() {
    await IntakeFormModel.create(this);
  }
}
