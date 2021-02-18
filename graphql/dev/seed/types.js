const Mutation = `
  type Mutation {
    """
    Quick data generator
    """
    clear: SeedResult!
    seed(input: SeedInput): SeedResult!
  }
`;

const SeedInput = `
  input SeedInput {
    numberOfIntakesPerYouth: Int
    numberOfListingsPerYouth: Int
    numberOfYouths: Int
  }
`;

const SeedResult = `
  type SeedResult {
    intakeForms: [IntakeForm!]!
    listings:  [Listing!]!
  }
`;

export default [Mutation, SeedInput, SeedResult];
