const CourtDate = `
  type CourtDate {
    courtroom: Courtroom!
    date: String!
    intakeForm: IntakeForm
    listing: Listing
  }
`;

const CourtDateInput = `
  input CourtDateInput {
    courtroom: CourtroomInput!
    date: String
  }
`;

export default [CourtDate, CourtDateInput];
