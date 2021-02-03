const SeedResult = `
  type SeedResult {
    intakeForms: [IntakeForm!]!
    listings:  [Listing!]!
  }
`;

const Mutation = `
  type Mutation {
    """
    Quick data generator
    """
    seed(
      numberOfIntakesEach: Int
      numberOfListingsEach: Int
      numberOfYouths: Int
      shouldClearFirst: Boolean
    ): SeedResult!
  }
`;

export default [Mutation, SeedResult];
