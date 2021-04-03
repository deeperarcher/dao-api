const CourtOrderEvent = `
  type CourtOrderEvent {
    eventType: EventType
    isSupervision: Boolean
    listing: Listing!
    order: String!
    petition: Petition!
    petitionNumbers: [String]
    reasons: [String]
    serviceProvider: ServiceProvider
  }
`;

const CourtOrderEventInput = `
  input CourtOrderEventInput {
    eventType: EventType
    isSupervision: Boolean
    order: String
    petitionNumbers: [String]
    serviceProvider: ServiceProviderInput
    reasons: [String]
  }
`;

export default [CourtOrderEvent, CourtOrderEventInput];
