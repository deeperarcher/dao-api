const ServiceProvider = `
  type ServiceProvider {
    courtOrderEvents: [CourtOrderEvent]!
    name: String!
  }
`;

const ServiceProviderInput = `
  input ServiceProviderInput {
    listingIDs: [String]
    name: String!
  }
`;

export default [ServiceProvider, ServiceProviderInput];
