const Certification = `
  type Certification {
    date: String!
    listing: Listing!
    petition: Petition!
  }
`;

const CertificationInput = `
  input CertificationInput {
    date: String!
    listingID: String!
    petitionNumbers: [String]!
  }
`;

export default [Certification, CertificationInput];
