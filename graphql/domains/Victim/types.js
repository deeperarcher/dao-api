const Victim = `
  type Victim {
    firstName: String!
    lastName: String!
    petition: Petition!
    petitionNumber: String!
    sex: String
  }
`;

const VictimInput = `
  input VictimInput {
    firstName: String!
    lastName: String!
    petitionNumber: String!
    sex: String
  }
`;

export default [Victim, VictimInput];
