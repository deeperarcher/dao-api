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
    officers: [String], // payroll #
    referralDate: String,
    SID: String,
  },
  callIn: {
    date: String,
    DRAIAction: String,
    DRAIScore: Number,
    holdFacility: String,
    overrideHoldReasons: [String],
    wasDRAIAdministered: Boolean,
  },
  charges: [
    {
      category: String,
      code: String,
      grade: String,
      ID: { required: true, type: String },
      isLead: Boolean,
      name: String,
      petitionNumber: { required: true, type: String },
    },
  ],
  courtOrderEvents: [
    {
      eventType: { required: true, type: String },
      isSupervision: Boolean,
      order: String,
      petitionNumbers: [String],
      reasons: [String],
      serviceProvider: {
        name: String,
      },
    },
  ],
  DA: String,
  diversion: {
    diversionType: String,
    reasonsNoDiversion: [String],
    referralDate: String,
    referralSource: String,
    YAPPanelDistrict: String,
  },
  evaluation: {
    diagnoses: [String],
    traumas: [String],
    treatments: [String],
  },
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
  intakeConference: {
    date: String,
    DHSStatusAtArrest: String,
    intakeConferenceType: String,
    outcome: String,
  },
  note: String,
  // Petition: 0 or 1 victims; Incident: 1 petition, therefore 0 or 1 victim
  petitions: [
    {
      dateFiled: { required: true, type: String },
      DCNum: String,
      incidentID: { required: true, type: String },
      isDirectFiled: { required: true, type: Boolean },
      isDiverted: { required: true, type: Boolean },
      isGunCase: { required: true, type: Boolean },
      isGunInvolved: { required: true, type: Boolean },
      isTransferFromOtherCounty: { required: true, type: Boolean },
      petitionNumber: { required: true, type: String },
    },
  ],
  victims: [
    {
      firstName: String,
      lastName: String,
      petitionNumber: { required: true, type: String },
      sex: String,
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
    phoneNumber: String,
    PID: { required: true, type: String },
    race: String,
    school: String,
    sex: String,
    zip: String,
  },
});

export default mongoose.model('IntakeForm', IntakeFormSchema);
