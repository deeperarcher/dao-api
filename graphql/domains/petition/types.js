const LegalStatusEvent = `
  type LegalStatusEvent {
    date: String!
    dischargeNature: String
    dischargeOutcome: String
    reasons: [String]
    status: String!
    type: String!
  }
`;

const Petition = `
  type Petition {
    charges: [PetitionCharge]
    dateFiled: String
    DCNum: String
    incidentID: String!
    isDirectFiled: Boolean
    isDiverted: Boolean
    isTransferFromOtherCounty: Boolean
    legalStatusEvents: [LegalStatusEvent]!
    petitionNumber: String!
    victimFirstName: String
    victimLastName: String
  }
`;

const PetitionCharge = `
  type PetitionCharge {
    chargeID: String!
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
