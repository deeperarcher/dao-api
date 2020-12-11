const Query = `
  type Query {
    intakeForm(_id: String!): IntakeForm!
    intakeForms: [IntakeForm!]!
  }`;

const Mutation = `
  type Mutation {
    insertIntakeForm(input: IntakeFormInput):  IntakeForm!
  }`;

const IntakeForm = `
  type IntakeForm {
    PID:  Int!
    firstName: String
    lastName: String
    dateOfBirth: String
    sex: String
    race: String
    isLatino: Boolean
    phoneNumber: String
    address: String
    zip: String
    school: String
    grade: String

    guardian1FirstName: String
    guardian1LastName: String
    guardian1Relation: String

    guardian2FirstName: String
    guardian2LastName: String
    guardian2Relation: String

    incidentDate: String
    isIncidentTimeKnown:  Boolean 
    incidentAddress: String
    incidentZip: String,
    incidentDistrict: String
    incidentType: String
    victimFirstName: String
    victimLastName: String

    DCNum: String
    SID: String
    arrestDate: String
    arrestingDistrict: String
    referralDate: String
    isGunCase: Boolean
    isGunInvolvedArrest: Boolean
    officers: [String]

    petitions: [IntakeFormPetition]

    DA: String
    notes: String

    diagnoses: [String]
    traumaTypes: [String]
    treatments: [String]
    
    callInDate: String
    wasDRAIAdministered: Boolean
    DRAIScore: Int
    DRAIAction: String
    callInHoldFacility: String
    callInOverrideHoldReasons: [String]
    
    intakeConferenceDate: String
    intakeConferenceType: String
    intakeConferenceOutcome: String
    DHSStatusAtArrest: String

    courtOrderEvents: [CourtOrderEvent]

    diversionType: String
    diversionReferralDate: String
    diversionReferralSource: String
    YAPPanelDistrict: String
    ReasonsNoDiversion: [String]

    initialHearingDate: String
    initialHearingLocation: String
}`;

const IntakeFormPetition = `
  type IntakeFormPetition {
    petitionNumber: String
    dateFiled: String
    isDirectFiled: Boolean
    isDiverted: Boolean
    isTransferFromOtherCounty: Boolean
    charges: [PetitionCharge]
  }
`;

const PetitionCharge = `
  type PetitionCharge {
    code: String
    name: String
    isLead: Boolean
    grade: String
    category: String
  }
`;

const CourtOrderEvent = `
  type CourtOrderEvent {
    petitionNumbers: [String]
    order: String
    isSupervision: Boolean
    provider: String
    eventType: String
    reasons: [String]
  }
`;

export default [
  CourtOrderEvent,
  IntakeForm,
  IntakeFormPetition,
  Mutation,
  PetitionCharge,
  Query,
];
