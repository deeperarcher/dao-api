const Listing = `
  type Listing {
    adjudications: [Adjudication]!
    admissions: [Admission]!
    certifications: [Certification]!
    charges: [Charge]!
    chargeGradeEvents: [ChargeGradeEvent]!
    continuances: [Continuance]!
    courtDate: CourtDate!
    courtOrders: [CourtOrder]!
    ID: String!
    intakeForm: IntakeForm!
    DA: String!
    legalStatusEvents: [LegalStatusEvent]!
    listingType: String
    nextListing: CourtDate!
    note: String
}`;

const ListingInput = `
  input ListingInput {
    adjudications: [AdjudicationInput]
    admissions: [AdmissionInput]
    certifications: [CertificationInput]
    charges: [ChargeInput]
    chargeGradeEvents: [ChargeGradeEventInput]
    continuances: [ContinuanceInput]
    courtOrders: [CourtOrderInput]
    courtDate: CourtDateInput!
    DA: String
    ID: String!
    intakeFormID: String!
    legalStatusEvents: [LegalStatusEventInput]
    listingType: String
    nextListing: CourtDateInput!
    note: String
    petitionNumbers: [String!]!
  }
`;

const Mutation = `
  type Mutation {
    insertListing(input: ListingInput): String!
  }
`;

const Query = `
  type Query {
    listing(_id: String!): Listing!
    listings(PID: String): [Listing]!
  }
`;

export default [Listing, ListingInput, Mutation, Query];
