const Victim = `
  type Victim {
    firstName: String!
    lastName: String!
    petition: Petition!
    petitionNumber: String!
  }
`;

const VictimInput = `
  input VictimInput {
    firstName: String!
    lastName: String!
    petitionNumber: String!
  }
`;

export default [Victim, VictimInput];
