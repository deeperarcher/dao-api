const Victim = `
  type Victim {
    firstName: String!
    incidentIDs: [String]!
    incidents: [Incident]!
    intakeForm: [IntakeForm]!
    lastName: String!
    petition: Petition!
    petitionNumber: String!
  }
`;

const VictimInput = `
  input VictimInput {
    firstName: String!
    incidentIDs: [String]!
    lastName: String!
    petitionNumber: String!
  }
`;

export default [Victim, VictimInput];
