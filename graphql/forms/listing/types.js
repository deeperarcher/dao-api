const Adjudication = `
    type Adjudication {
    chargeIDs: [String]
    date: String
    reasons: [String]
    }
`;

const Admission = `
    type Admission {
    chargeIDs: [String]
    date: String
    result: String
    }
`;

const Certification = `
  type Certification {
    date: String
    petitionNumbers: [String]
    }
`;

const Continuance = `
    type Continuance {
    date: String
    listingStatus: String
    petitionNumbers: [String]
    reasons: [String]
    }
`;

const CourtOrderEvent = `
    type CourtOrderEvent {
    eventType: String
    isSupervision: Boolean
    order: String
    petitionNumbers: [String]
    provider: String
    reasons: [String]
    }
`;

const LegalStatusEvent = `
    type LegalStatusEvent {
    date: String
    dischargeNature: Nature
    dischargeOutcome: String
    eventType: String
    petitionNumbers: [String]
    reasons: [String]
    status: String
    }
`;

const Listing = `
  type Listing {
    adjudications: [Adjudication]
    admissions: [Admission]
    certifications: [Certification]
    continuances: [Continuance]
    courtOrderEvents: [CourtOrderEvent]
    courtroom: String
    date: String
    DA: String
    legalStatusEvents: [LegalStatusEvent]
    nextListingDate: String
    nextListingLocation: String
    notes: String
    PID: Int!
}`;

const Mutation = `
  type Mutation {
    insertListing(input: ListingInput):  Listing!
  }
`;

const Query = `
  type Query {
    listing(_id: String!): Listing!
    listings: [Listing!]!
  }
`;

export default [
  Adjudication,
  Admission,
  Certification,
  Continuance,
  CourtOrderEvent,
  LegalStatusEvent,
  Listing,
  Mutation,
  Query,
];
