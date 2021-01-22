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
    PID: Int!
    race: String
    school: String
    sex: String
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
    intakeFormID: String!
    isLatino: Boolean
    lastName: String!
    phoneNumber: String
    PID: Int!
    race: String
    school: String
    sex: String
    zip: String
  }
`;

const Query = `
  type Query {
    youth(PID: Int!): Youth!
    youths: [Youth]!
  }
`;

export default [Youth, YouthInput, Query];
