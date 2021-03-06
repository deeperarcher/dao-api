const ChargeGradeEvent = `
  type ChargeGradeEvent {
    charge: Charge!
    date: String!
    listing: Listing!
    grade: String!
  }
`;

const ChargeGradeEventInput = `
  input ChargeGradeEventInput {
    chargeID: String!
    grade: String!
  }
`;

export default [ChargeGradeEvent, ChargeGradeEventInput];
