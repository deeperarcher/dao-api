import * as faker from 'faker';
import LIST from '../input-lists';

function fromList(list) {
  return faker.random.arrayElement(Object.keys(list));
}

function intoArray(max, body) {
  return new Array(faker.random.number(max - 1) + 2)
    .fill()
    .map(typeof body === 'function' ? body : () => body);
}

export function dateStringToMs(dateString) {
  return Math.floor(new Date(dateString).getTime()).toString();
}

export class Youth {
  constructor() {
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.dateOfBirth = faker.date.between('2003-01-01', '2008-12-31');
    this.PID = faker.random.number(10000);
  }

  generateIntakeData() {
    console.log('label', new IntakeForm(this));
    return new IntakeForm(this);
  }
}

class IntakeForm {
  constructor(youth, options) {
    this.firstName = youth.firstName;
    this.lastName = youth.lastName;
    this.dateOfBirth = youth.dateOfBirth;
    this.PID = youth.PID;
    this.incidents = intoArray(3, () => new Incident());
    this.SID = (faker.random.number(89999) + 10000).toString();
    this.arrestDate = faker.date.recent();
    this.arrestingDistrict = faker.random.number(25);
    this.referralDate = faker.date.recent();
    this.isGunCase = faker.random.boolean();
    this.isGunInvolvedArrest = faker.random.boolean();
    this.officers = intoArray(3, () =>
      (faker.random.number(89999) + 10000).toString()
    );

    this.DA = faker.name.lastName();
    this.notes = faker.lorem.words(20);

    this.diagnoses = intoArray(3, () => fromList(LIST.Diagnosis));
    this.traumaTypes = intoArray(3, () => fromList(LIST.TraumaType));
    this.treatments = intoArray(3, () => fromList(LIST.Treatment));

    this.callInDate = faker.date.recent();
    this.wasDRAIAdministered = faker.random.boolean();
    this.DRAIScore = faker.random.number(12);
    this.DRAIAction = fromList(LIST.DRAIAction);
    this.callInHoldFacility = fromList(LIST.DetentionFacility);
    this.callInOverrideHoldReasons = intoArray(3, () => faker.random.words(2));

    this.intakeConferenceDate = faker.date.recent();
    this.intakeConferenceType = fromList(LIST.IntakeConferenceType);
    this.intakeConferenceOutcome = fromList(LIST.IntakeConferenceOutcome);
    this.DHSStatusAtArrest = fromList(LIST.DHSStatus);

    // DIVERSION
    this.diversionType = faker.random.word();
    this.diversionReferralDate = faker.date.recent();
    this.diversionReferralSource = faker.random.word();
    this.YAPPanelDistrict = faker.random.number(20);
    this.ReasonsNoDiversion = intoArray(3, () => faker.random.words(2));

    // NEXT HEARING
    this.initialHearingDate = faker.date.soon();
    this.initialHearingLocation = fromList(LIST.Courtroom);

    this.petitions = intoArray(3, () => new Petition(this.incidents));

    this.courtOrderEvents = intoArray(
      3,
      () => new CourtOrderEvent(this.petitions)
    );
  }
}

class Incident {
  constructor() {
    this.incidentDate = faker.date.recent();
    this.incidentAddress = faker.address.streetAddress();
    this.incidentID = (
      this.incidentAddress.substr(0, 10) +
      this.incidentDate.toDateString().substr(0, 10)
    )
      .replace(/\s/g, '')
      .toUpperCase();
    this.isIncidentTimeKnown = faker.random.boolean();
    this.incidentZip = faker.address.zipCode();
    this.incidentDistrict = faker.random.number(50) + 1;
    this.incidentType = fromList(LIST.IncidentType);
  }
}

class CourtOrderEvent {
  constructor(petitions) {
    this.isSupervision = faker.random.boolean();
    this.petitionNumbers = petitions.map(p => p.petitionNumber);
    this.order = fromList(
      this.isSupervision ? LIST.SupervisionType : LIST.ConditionType
    );
    this.provider = faker.random.words(2);
    this.eventType = 'ORDERED';
    this.reasons = intoArray(3, () => faker.random.words(2));
  }
}

class Petition {
  constructor(incidents) {
    this.petitionNumber = faker.random.number(10000).toString();
    this.dateFiled = faker.date.recent();
    this.DCNum = (faker.random.number(89999) + 10000).toString();
    this.incidentID = faker.random.arrayElement(incidents).incidentID;
    this.isDirectFiled = false;
    this.isDiverted = false;
    this.isTransferFromOtherCounty = false;
    this.victimFirstName = faker.name.firstName();
    this.victimLastName = faker.name.lastName();

    this.charges = intoArray(3, (val, i) => new Charge(i === 0));
  }
}

class Charge {
  constructor(isLead) {
    this.code = faker.random.alphaNumeric(5);
    this.name = faker.name.jobTitle();
    this.isLead = isLead;
    this.grade = fromList(LIST.ChargeGrade);
    this.category = fromList(LIST.ChargeCategory);
  }
}
