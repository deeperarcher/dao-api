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
    petitionNumbers: [String]!
  }
`;

export default [Certification, CertificationInput];
