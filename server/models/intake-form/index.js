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
  dateOfBirth: { required: true, type: String },
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

  incidents: [
    {
      incidentID: { required: true, type: String },
      incidentDate: String,
      isIncidentTimeKnown: { required: true, type: Boolean },
      incidentAddress: String,
      incidentZip: String,
      incidentDistrict: String,
      incidentType: { required: true, type: String },
    },
  ],

  // ARREST
  SID: String,
  arrestDate: String,
  arrestingDistrict: String,
  referralDate: String,
  isGunCase: Boolean,
  isGunInvolvedArrest: Boolean,
  officers: [String], //payroll#

  petitions: [
    {
      dateFiled: { required: true, type: String },
      DCNum: String,
      incidentID: { required: true, type: String },
      isDirectFiled: { required: true, type: Boolean },
      isDiverted: { required: true, type: Boolean },
      isTransferFromOtherCounty: { required: true, type: Boolean },
      petitionNumber: { required: true, type: String },
      victimFirstName: String,
      victimLastName: String,
      charges: [
        {
          code: { required: true, type: String },
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
  callInDate: String,
  wasDRAIAdministered: Boolean,
  DRAIScore: Number,
  DRAIAction: String,
  callInHoldFacility: String,
  callInOverrideHoldReasons: [String],

  // INTAKE CONFERENCE
  intakeConferenceDate: String,
  intakeConferenceType: String,
  intakeConferenceOutcome: String,
  DHSStatusAtArrest: String,

  courtOrderEvents: [
    {
      petitionNumbers: [String],
      order: String,
      isSupervision: Boolean,
      provider: String,
      eventType: String,
      reasons: [String],
    },
  ],

  // DIVERSION
  diversionType: String,
  diversionReferralDate: String,
  diversionReferralSource: String,
  YAPPanelDistrict: String,
  ReasonsNoDiversion: [String],

  // NEXT HEARING
  initialHearingDate: String,
  initialHearingLocation: String,
});

export default mongoose.model('IntakeForm', IntakeFormSchema);
