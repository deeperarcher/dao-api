const Adjudication = `
  type Adjudication {
    charge: Charge!
    date: String!
    listing: Listing!
    reasons: [String]!
  }
`;

const AdjudicationInput = `
  input AdjudicationInput {
    chargeIDs: [String]!
    date: String!
    listingID: String!
    reasons: [String]!
  }
`;

export default [Adjudication, AdjudicationInput];
