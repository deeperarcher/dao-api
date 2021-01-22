const Admission = `
  type Admission {
    charge: Charge!
    date: String!
    listing: Listing!
    result: String!
  }
`;

const AdmissionInput = `
  input AdmissionInput {
    chargeIDs: [String]!
    date: String!
    listingID: String!
    result: String!
  }
`;

export default [Admission, AdmissionInput];
