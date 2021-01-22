const Continuance = `
  type Continuance {
    continuanceType: String!
    date: String!
    listing: Listing!
    listingStatus: String!
    petition: Petition!
    reasons: [String]!
  }
`;

const ContinuanceInput = `
  input ContinuanceInput {
    continuanceType: String!
    date: String!
    listingID: String!
    listingStatus: String!
    petitionNumbers: [String!]!
    reasons: [String]!
  }
`;

export default [Continuance, ContinuanceInput];
