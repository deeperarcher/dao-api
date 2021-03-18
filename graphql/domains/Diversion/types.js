const Diversion = `
  type Diversion {
    diversionType: String
    reasonsNoDiversion: [String]
    referralDate: String
    referralSource: String
    YAPPanelDistrict: String
  }
`;

const DiversionInput = `
  input DiversionInput {
    diversionType: String
    reasonsNoDiversion: [String]
    referralDate: String
    referralSource: String
    YAPPanelDistrict: String
  }
`;

export default [Diversion, DiversionInput];
