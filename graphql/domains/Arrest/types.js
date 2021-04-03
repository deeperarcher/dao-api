const Arrest = `
  type Arrest {
    date: String
    district: String
    incidents: [Incident]!
    intakeForm: IntakeForm!
    isActiveAtTimeOfArrest: Boolean
    officers: [String]!
    petitions: [Petition!]!
    priorArrestCount: Int
    referralDate: String
    SID: String
    youth: Youth!
  }
`;

const ArrestInput = `
  input ArrestInput {
    date: String
    district: String
    isActiveAtTimeOfArrest: Boolean
    officers: [String]!
    petitionNumbers: [String]!
    priorArrestCount: Int
    referralDate: String
    SID: String
  }
`;

export default [Arrest, ArrestInput];
