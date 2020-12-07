const Arrest = `
  type Arrest {
    arrestDate: String
    arrestingDistrict: String
    DCNum: String
    isDirectFiled: Boolean
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
