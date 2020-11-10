import mongoose from 'mongoose';
import { ObjectID } from 'mongodb';
const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function () {
  return this.toString();
};

const IntakeFormSchema = new Schema({
  // YOUTH
  PID: { required: true, type: Number },
  firstName: { required: true, type: String },
  lastName: { required: true, type: String },
  dateOfBirth: { required: true, type: Date },
  sex: String,
  race: String,
  isLatino: Boolean,
  phoneNumber: Number,
  address: String,
  zip: String,
  school: String,
  grade: String,

  guardian1FirstName: String,
  guardian1LastName: String,
  guardian1Relation: String,

  guardian2FirstName: String,
  guardian2LastName: String,
  guardian2Relation: String,

  // INCIDENT
  incidentDate: Date,
  isIncidentTimeKnown: { required: true, type: Boolean },
  incidentAddress: String,
  incidentZip: String,
  incidentDistrict: String,
  incidentType: String,
  victimFirstName: String,
  victimLastName: String,

  // ARREST
  DCNum: String,
  SID: String,
  arrestDate: Date,
  arrestingDistrict: String,
  referralDate: Date,
  isGunCase: Boolean,
  isGunInvolvedArrest: Boolean,
  officers: [String], //payroll#

  isDirectFiled: Boolean,

  petitions: [
    {
      petitionNum: Number,
      dateFiled: Date,
      isTransferFromOtherCounty: Boolean,
      legalStatus: String,
      charges: [
        {
          code: String,
          name: String,
          isLead: Boolean,
          grade: String,
          category: String,
        },
      ],
    },
  ],

  DA: String,
  notes: String,

  // EVALUATION
  diagnoses: [String],
  traumaTypes: [String],
  treatments: [String],

  // CALL-IN
  callInDate: Date,
  wasDRAIAdministered: Boolean,
  DRAIScore: Number,
  DRAIAction: String,
  callInHoldFacility: String,
  callInOverrideHoldReasons: [String],

  // INTAKE CONFERENCE
  intakeConferenceDate: Date,
  intakeConferenceType: String,
  intakeConferenceOutcome: String,
  DHSStatusAtArrest: String,

  courtOrderEvents: [
    {
      chargeIDs: [String],
      order: String,
      isSupervision: Boolean,
      provider: String,
      eventType: String,
      reasons: [String],
    },
  ],

  // DIVERSION
  diversionType: String,
  diversionReferralDate: Date,
  diversionReferralSource: String,
  YAPPanelDistrict: String,
  ReasonsNoDiversion: [String],

  // NEXT HEARING
  initialHearingDate: String,
  initialHearingLocation: String,
});

export default mongoose.model('IntakeForm', IntakeFormSchema);
