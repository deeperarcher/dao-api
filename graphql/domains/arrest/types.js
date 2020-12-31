const Arrest = `
  type Arrest {
    arrestDate: String
    arrestingDistrict: String
    isGunCase: Boolean
    isGunInvolvedArrest: Boolean
    officers: [String]
    referralDate: String
    SID: String
  }
`;

const Query = `
  type Query {
    arrests: [Arrest!]!
  }
`;

export default [Arrest, Query];
