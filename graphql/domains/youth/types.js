const Youth = `
  type Youth {
    arrests: [Arrest!]!
    courtOrderEvents: [CourtOrderEvent]!
    dateOfBirth: String!
    firstName: String!
    incidents: [Incident!]!
    lastName: String!
    petitions: [Petition!]!
    PID: Int!
  }
`;

const Query = `
  type Query {
    youth(PID: Int!): Youth!
    youths: [Youth]!
  }
`;

export default [Youth, Query];
