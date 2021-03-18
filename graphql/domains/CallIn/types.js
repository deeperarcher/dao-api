const CallIn = `
  type CallIn {
    date: String!
    DRAIAction: String
    DRAIScore: Int
    holdFacility: String
    overrideHoldReasons: [String]
    wasDRAIAdministered: Boolean
  }
`;

const CallInInput = `
  input CallInInput {
    date: String!
    DRAIAction: String
    DRAIScore: Int
    holdFacility: String
    overrideHoldReasons: [String]
    wasDRAIAdministered: Boolean
  }
`;

export default [CallIn, CallInInput];
