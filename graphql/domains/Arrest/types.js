const Arrest = `
  type Arrest {
    date: String
    district: String
    incidents: [Incident]!
    intakeForm: IntakeForm!
    isGunCase: Boolean
    isGunInvolvedArrest: Boolean
    officers: [String]!
    petitions: [Petition!]!
    referralDate: String
    SID: String
    youth: Youth!
  }
`;

const ArrestInput = `
  input ArrestInput {
    date: String
    district: String
    incidentIDs: [String]!
    intakeFormID: String!
    isGunCase: Boolean
    isGunInvolvedArrest: Boolean
    officers: [String]!
    petitionNumbers: [String]!
    referralDate: String
    SID: String
  }`;

export default [Arrest, ArrestInput];
