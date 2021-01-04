const Youth = `
  type Youth {
    adjudications: [Adjudication]
    admissions: [Admission]
    arrests: [Arrest!]!
    certifications: [Certification]
    continuances: [Continuance]
    courtOrderEvents: [CourtOrderEvent]!
    dateOfBirth: String!
    firstName: String!
    incidents: [Incident!]!
    lastName: String!
    legalStatusEvents: [LegalStatusEvent]
    listings: [Listing!]
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
