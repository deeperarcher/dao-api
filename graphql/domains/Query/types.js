const Query = `
  type Query {
    arrestsByGunInvolvementCsv(isGunInvolvedArrest: Boolean): String!
    intakeForm(_id: String!): IntakeForm!
    intakeForms(PID: String): [IntakeForm]!
    listing(_id: String!): Listing!
    listings(PID: String): [Listing]!
    youth(PID: String!): Youth!
    youths: [Youth]!
  }
`;

export default [Query];
