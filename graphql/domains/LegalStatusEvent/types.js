const LegalStatusEvent = `
  type LegalStatusEvent {
    date: String!
    dischargeNature: String
    dischargeOutcome: String
    eventType: String!
    listing: Listing!
    petition: Petition!
    reasons: [String]!
    status: String!
  }
`;

const LegalStatusEventInput = `
  input LegalStatusEventInput {
    date: String!
    dischargeNature: String
    dischargeOutcome: String
    eventType: String!
    petitionNumbers: [String]!
    reasons: [String]!
    status: String!
  }
`;

export default [LegalStatusEvent, LegalStatusEventInput];
