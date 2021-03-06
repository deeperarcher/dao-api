import * as faker from 'faker';

import IntakeFormModel from '../../server/models/IntakeForm';

import Arrest from './Arrest';
import Charge from './Charge';
import CourtDate from './CourtDate';
import Incident from './Incident';
import Petition from './Petition';
import Youth from './Youth';
import { formatDate, intoArray } from './utilities';

export default class IntakeForm {
  constructor({ youth }) {
    const petitionNumber = faker.random.number(10000).toString();
    const incidentAddress = faker.address.streetAddress();
    const incidentDate = formatDate(faker.date.recent());
    const incidentID = (
      petitionNumber +
      incidentAddress.substr(0, 10) +
      incidentDate.substr(0, 10)
    )
      .replace(/\s/g, '')
      .toUpperCase();

    this.arrest = new Arrest();
    this.charges = intoArray(3, (_, i) => new Charge(i === 0, petitionNumber));
    this.courtOrders = [];
    this.DA = faker.name.lastName();
    this.incident = new Incident({
      incidentAddress,
      incidentDate,
      incidentID,
      petitionNumber,
    });

    this.initialHearing = new CourtDate();
    this.note = faker.lorem.words(20);
    this.petitions = [new Petition({ incidentID, petitionNumber })];
    this.victims = [
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
      },
    ];

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
