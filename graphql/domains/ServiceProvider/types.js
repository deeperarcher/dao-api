const ServiceProvider = `
  type ServiceProvider {
    courtOrders: [CourtOrder]!
    name: String!
  }
`;

const ServiceProviderInput = `
  input ServiceProviderInput {
    listingIDs: [String]!
    name: String!
  }
`;

export default [ServiceProvider, ServiceProviderInput];
