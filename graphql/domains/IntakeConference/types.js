const IntakeConference = `
  type IntakeConference {
    date: String
    DHSStatusAtArrest: String
    intakeConferenceType: String
    outcome: String
  }
`;

const IntakeConferenceInput = `
  input IntakeConferenceInput {
    date: String
    DHSStatusAtArrest: String
    intakeConferenceType: String
    outcome: String
  }
`;

export default [IntakeConference, IntakeConferenceInput];
