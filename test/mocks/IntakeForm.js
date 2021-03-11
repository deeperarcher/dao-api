import * as faker from 'faker';

import IntakeFormModel from '../../server/models/IntakeForm';

import Arrest from './Arrest';
import Charge from './Charge';
import CourtDate from './CourtDate';
import CourtOrderEvent from './CourtOrderEvent';
import Incident from './Incident';
import Petition from './Petition';
import Victim from './Victim';
import Youth from './Youth';
import { intoArray } from './utilities';

export default class IntakeForm {
  constructor({ youth }) {
    const petitions = intoArray(3, () => new Petition());

    this.arrest = new Arrest();
    this.charges = petitions.flatMap(({ petitionNumber }) =>
      intoArray(3, (_, i) => new Charge({ isLead: i === 0, petitionNumber }))
    );

    this.courtOrderEvents = intoArray(
      3,
      () => new CourtOrderEvent({ petitions })
    );

    this.DA = faker.name.lastName();
    this.incidents = petitions.map(({ petitionNumber }, i) => {
      const incident = new Incident({ petitionNumber });

      petitions[i].incidentID = incident.ID;

      return incident;
    });

    this.initialHearing = new CourtDate();
    this.note = faker.lorem.words(20);
    this.petitions = petitions;
    this.victims = petitions.reduce(
      (acc, { petitionNumber }) =>
        faker.random.boolean() ? [...acc, new Victim({ petitionNumber })] : acc,
      []
    );

    this.youth = youth || new Youth();

    // TODO: flesh out these domains in gql
    // CALL-IN
    // this.callInDate = formatDate(faker.date.recent());
    // this.callInHoldFacility = fromList(LIST.DetentionFacility);
    // this.callInOverrideHoldReasons = intoArray(3, () => faker.random.words(2));
    // this.DRAIAction = fromList(LIST.DRAIAction);
    // this.DRAIScore = faker.random.number(12);
    // this.wasDRAIAdministered = faker.random.boolean();
    // // DIVERSION
    // this.diversionType = faker.random.word();
    // this.diversionReferralDate = formatDate(faker.date.recent());
    // this.diversionReferralSource = faker.random.word();
    // this.ReasonsNoDiversion = intoArray(3, () => faker.random.words(2));
    // this.YAPPanelDistrict = faker.random.number(20);
    // // EVALUATION
    // this.diagnoses = intoArray(3, () => fromList(LIST.Diagnosis));
    // this.traumaTypes = intoArray(3, () => fromList(LIST.TraumaType));
    // this.treatments = intoArray(3, () => fromList(LIST.Treatment));
    // // INTAKE CONFERENCE
    // this.DHSStatusAtArrest = fromList(LIST.DHSStatus);
    // this.intakeConferenceDate = formatDate(faker.date.recent());
    // this.intakeConferenceOutcome = fromList(LIST.IntakeConferenceOutcome);
    // this.intakeConferenceType = fromList(LIST.IntakeConferenceType);
  }
  async save() {
    await IntakeFormModel.create(this);
  }
}
