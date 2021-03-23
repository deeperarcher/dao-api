const Arrest = `
  type Arrest {
    date: String
    district: String
    incidents: [Incident]!
    intakeForm: IntakeForm!
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
    officers: [String]!
    petitionNumbers: [String]!
    referralDate: String
    SID: String
  }
`;

export default [Arrest, ArrestInput];
