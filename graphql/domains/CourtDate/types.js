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
    intakeFormID: String
    listingID: String
  }
`; // TODO: collapse into one form ID?

export default [CourtDate, CourtDateInput];
