const Query = `
  type Query {
    intakeForm(_id: String!): IntakeForm!
    intakeForms(PID: String): [IntakeForm]!
    legacyExport: String!
    legacyInputDirectory: String!
    listing(_id: String!): Listing!
    listings(PID: String): [Listing]!
    youth(PID: String!): Youth!
    youths: [Youth]!
  }
`;

export default [Query];
