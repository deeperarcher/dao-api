const AdjudicationInput = `
  input AdjudicationInput {
    chargeIDs: [String]
    date: String
    reasons: [String]
    }
`;

const AdmissionInput = `
    input AdmissionInput {
    chargeIDs: [String]
    date: String
    result: String
    }
`;

const CertificationInput = `
  input CertificationInput {
    date: String
    petitionNumbers: [String]
    }
`;

const ContinuanceInput = `
    input ContinuanceInput {
    date: String
    listingStatus: String
    petitionNumbers: [String]
    reasons: [String]
    }
`;

const CourtOrderEventInput = `
    input CourtOrderEventInput {
    eventType: String
    isSupervision: Boolean
    order: String
    petitionNumbers: [String]
    provider: String
    reasons: [String]
    }
`;

const LegalStatusEventInput = `
    input LegalStatusEventInput {
    date: String
    dischargeNature: String
    dischargeOutcome: String
    eventType: String
    petitionNumbers: [String]
    reasons: [String]
    status: String
    }
`;

const ListingInput = `
  input ListingInput {
    adjudications: [AdjudicationInput]
    admissions: [AdmissionInput]
    certifications: [CertificationInput]
    continuances: [ContinuanceInput]
    courtOrderEvents: [CourtOrderEventInput]
    courtroom: String
    date: String
    DA: String
    legalStatusEvents: [LegalStatusEventInput]
    notes: String
    PID: Int
  }
`;

export default [
  AdjudicationInput,
  AdmissionInput,
  CertificationInput,
  ContinuanceInput,
  CourtOrderEventInput,
  LegalStatusEventInput,
  ListingInput,
];
