const Petition = `
  type Petition {
    arrest: Arrest!
    certifications: [Certification]!
    continuances: [Continuance]!
    courtOrderEvents: [CourtOrderEvent]!
    charges: [Charge!]!
    dateFiled: String
    DCNum: String
    incident: Incident!
    incidentID: String!
    intakeForm: IntakeForm!
    isDirectFiled: Boolean
    isDiverted: Boolean
    isTransferFromOtherCounty: Boolean
    legalStatus: String!
    legalStatusEvents: [LegalStatusEvent]!
    listings: [Listing]!
    petitionNumber: String!
    victims: [Victim]!
  }
`;

const PetitionInput = `
  input PetitionInput {
    dateFiled: String!
    DCNum: String
    incidentID: String!
    isDirectFiled: Boolean
    isDiverted: Boolean
    isTransferFromOtherCounty: Boolean
    petitionNumber: String!
  }
`;

export default [Petition, PetitionInput];
