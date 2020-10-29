import mongoose from 'mongoose';
import { ObjectID } from 'mongodb';
import enums from '../../../enums';
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
  sex: { enum: enums.Sex.keys, type: String },
  race: { enum: enums.Race.keys, type: String },
  isLatino: Boolean,
  phoneNumber: Number,
  address1: String,
  address2: String,
  zip: String,
  school: String,
  grade: String,

  guardian1FirstName: String,
  guardian1LastName: String,
  guardian1Relation: { enum: enums.Relation.keys, type: String },

  guardian2FirstName: String,
  guardian2LastName: String,
  guardian2Relation: { enum: enums.Relation.keys, type: String },

  // INCIDENT
  incidentDate: Date,
  isIncidentTimeKnown: { required: true, type: Boolean },
  incidentAddress: String,
  incidentZip: String,
  incidentDistrict: String,
  incidentType: { enum: enums.IncidentType.keys, type: String },
  victimFirstName: String,
  victimLastName: String,

  // ARREST
  DCNum: String,
  SID: String,
  arrestDate: Date,
  arrestingDistrict: Number,
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
      legalStatus: { enum: enums.LegalStatus.keys, type: String },
      charges: [
        {
          code: String,
          name: String,
          isLead: Boolean,
          grade: { enum: enums.ChargeGrade.keys, type: String },
          category: { enum: enums.ChargeCategory.keys, type: String },
        },
      ],
    },
  ],

  DA: String,
  notes: String,

  // EVALUATION
  diagnoses: [{ enum: enums.Diagnosis.keys, type: String }],
  traumaTypes: [{ enum: enums.TraumaType.keys, type: String }],
  treatments: [{ enum: enums.Treatment.keys, type: String }],

  // CALL-IN
  callInDate: Date,
  wasDRAIAdministered: Boolean,
  DRAIScore: Number,
  DRAIAction: String, // TODO enum
  callInHoldFacility: String, // TODO enum
  callInOverrideHoldReasons: [String], // TODO enum

  // INTAKE CONFERENCE
  intakeConferenceDate: Date,
  intakeConferenceType: String, // TODO enum
  intakeConferenceOutcome: String, // TODO enum
  DHSStatusAtArrest: String, // TODO enum

  supervisions: [
    {
      supervisionType: { enum: enums.SupervisionType.key, type: String },
      agency: String, // TODO enum
      reasons: [String], // TODO
    },
  ],

  conditions: [{ conditionType: String, provider: String }],

  // DIVERSION
  diversionType: String,
  diversionReferralDate: Date,
  diversionReferralSource: String,
  YAPPanelDistrict: String,
  ReasonsNoDiversion: [String],


  // NEXT HEARING
  initialHearingDate: String,
  initialHearingLocation: { enum: enums.Courtroom.keys, type: String },
});

export default mongoose.model('IntakeForm', IntakeFormSchema);
