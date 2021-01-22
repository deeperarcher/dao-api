const CourtOrder = `
  type CourtOrder {
    courtOrderType: String
    isSupervision: Boolean
    listing: Listing!
    order: String!
    petition: Petition!
    reasons: [String]
    serviceProvider: ServiceProvider
  }
`;

const CourtOrderInput = `
  input CourtOrderInput {
    courtOrderType: String
    isSupervision: Boolean
    order: String
    petitionNumbers: [String]
    serviceProvider: String
    reasons: [String]
  }
`;

export default [CourtOrder, CourtOrderInput];
