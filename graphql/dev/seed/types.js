const SeedInput = `
  input SeedInput {
    "The number of youths to generate"
    youthCount: Int!

    "The number of intakes to generate for each youth generated"
    intakesPerYouth: Int!

    "The number of lisitngs to generate for each youth generated"
    listingsPerYouth: Int!

    "Whether to remove existing data before seeding"
    shouldClearFirst: Boolean!
  }
`;

const SeedResult = `
  type SeedResult {
    IntakeForms: [IntakeForm!]
    Listings:  [Listing!]
  }
`;

const Mutation = `
  type Mutation {
    """
    Quick data generator
    """
    seed(input: SeedInput!): SeedResult!
  }
`;

export default [Mutation, SeedInput, SeedResult];
