const LegalStatusEvent = `
  type LegalStatusEvent {
    date: String!
    dischargeNature: String
    dischargeOutcome: String
    petitionNumbers: [String!]!
    reasons: [String]
    status: String!
    type: String!
  }
`;

const Petition = `
  type Petition {
    charges: [PetitionCharge]
    dateFiled: String
    isTransferFromOtherCounty: Boolean
    legalStatusEvents: [LegalStatusEvent]!
    petitionNumber: String
  }
`;

const PetitionCharge = `
  type PetitionCharge {
    category: String
    code: String
    grade: String
    isLead: Boolean
    name: String
  }
`;

const Query = `
  type Query {
    petitions: [Petition!]!
  }
`;

export default [LegalStatusEvent, Petition, PetitionCharge, Query];
