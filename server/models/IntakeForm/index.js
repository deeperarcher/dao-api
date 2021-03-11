import { ObjectID } from 'mongodb';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function () {
  return this.toString();
};

const IntakeFormSchema = new Schema({
  arrest: {
    date: String,
    district: String,
    isGunCase: Boolean,
    isGunInvolvedArrest: Boolean,
    officers: [String], // payroll #
    referralDate: String,
    SID: String,
  },
  charges: [
    {
      category: String,
      code: String,
      grade: String,
      ID: String,
      isLead: Boolean,
      name: String,
    },
  ],
  courtOrderEvents: [
    {
      eventType: { required: true, type: String },
      isSupervision: Boolean,
      order: String,
      petitionNumbers: [String],
      reasons: [String],
      serviceProvider: String,
    },
  ],
  DA: String,
  // Incident: 1+ petitions, therefore 0+ victims
  incidents: [
    {
      address: String,
      date: String,
      district: String,
      ID: { required: true, type: String },
      incidentType: { required: true, type: String },
      isTimeKnown: { required: true, type: Boolean },
      petitionNumber: { required: true, type: String },
      zip: String,
    },
  ],
  initialHearing: {
    courtroom: {
      name: String,
    },
    date: String,
  },
  note: String,
  // Petition: 0 or 1 victims; Incident: 1+ petitions, therefore 0+ victims
  petitions: [
    {
      dateFiled: { required: true, type: String },
      DCNum: String,
      incidentID: { required: true, type: String },
      isDirectFiled: { required: true, type: Boolean },
      isDiverted: { required: true, type: Boolean },
      isTransferFromOtherCounty: { required: true, type: Boolean },
      petitionNumber: { required: true, type: String },
    },
  ],
  victims: [
    {
      firstName: String,
      incidentIDs: [String],
      lastName: String,
      petitionNumber: [String],
    },
  ],
  youth: {
    address: String,
    dateOfBirth: { required: true, type: String },
    firstName: { required: true, type: String },
    grade: String,
    guardians: [
      {
        firstName: String,
        lastName: String,
        relation: String,
      },
    ],
    isLatino: Boolean,
    lastName: { required: true, type: String },
    phoneNumber: Number,
    PID: { required: true, type: String },
    race: String,
    school: String,
    sex: String,
    zip: String,
  },

  // TODO: Get in there, misunderstood domains!
  // // CALL-IN
  // callInDate: String,
  // callInHoldFacility: String,
  // callInOverrideHoldReasons: [String],
  // DRAIAction: String,
  // DRAIScore: Number,
  // wasDRAIAdministered: Boolean,
  // // DIVERSION
  // diversionReferralDate: String,
  // diversionReferralSource: String,
  // diversionType: String,
  // ReasonsNoDiversion: [String],
  // YAPPanelDistrict: String,
  // // EVALUATION
  // diagnoses: [String],
  // traumaTypes: [String],
  // treatments: [String],
  // // INTAKE CONFERENCE
  // DHSStatusAtArrest: String,
  // intakeConferenceDate: String,
  // intakeConferenceOutcome: String,
  // intakeConferenceType: String,
});

export default mongoose.model('IntakeForm', IntakeFormSchema);
