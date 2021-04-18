const Youth = `
  type Youth {
    address: String
    arrests: [Arrest]!
    dateOfBirth: String!
    firstName: String!
    grade: String
    guardians: [Guardian]!
    incidents: [Incident!]!
    intakeForms: [IntakeForm!]!
    isLatino: Boolean
    lastName: String!
    listings: [Listing]!
    phoneNumber: String
    PID: String!
    race: String
    school: String
    sex: String
    SID: String
    zip: String
  }
`;

const YouthInput = `
  input YouthInput {
    address: String
    dateOfBirth: String!
    firstName: String!
    grade: String
    guardians: [GuardianInput]!
    isLatino: Boolean
    lastName: String!
    phoneNumber: String
    PID: String!
    race: String
    school: String
    sex: String
    SID: String
    zip: String
  }
`;

export default [Youth, YouthInput];
