const Listing = `
  type Listing {
    adjudications: [Adjudication]!
    admissions: [Admission]!
    certifications: [Certification]!
    charges: [Charge]!
    chargeGradeEvents: [ChargeGradeEvent]!
    continuances: [Continuance]!
    courtDate: CourtDate!
    courtOrderEvents: [CourtOrderEvent]!
    DA: String!
    legalStatusEvents: [LegalStatusEvent]!
    listingType: String
    nextListing: CourtDate!
    note: String
    PID: String!
}`;

const ListingInput = `
  input ListingInput {
    adjudications: [AdjudicationInput]
    admissions: [AdmissionInput]
    certifications: [CertificationInput]
    charges: [ChargeInput]
    chargeGradeEvents: [ChargeGradeEventInput]
    continuances: [ContinuanceInput]
    courtOrderEvents: [CourtOrderEventInput]
    courtDate: CourtDateInput!
    DA: String
    legalStatusEvents: [LegalStatusEventInput]
    listingType: String
    nextListing: CourtDateInput!
    note: String
    petitionNumbers: [String!]!
    PID: String!
  }
`;

const Mutation = `
  type Mutation {
    insertListing(input: ListingInput): String!
  }
`;

export default [Listing, ListingInput, Mutation];
