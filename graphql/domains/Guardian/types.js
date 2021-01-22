const Guardian = `
  type Guardian {
    firstName: String!
    intakeForm: IntakeForm!
    lastName: String!
    relation: String
    youth: Youth!
}`;

const GuardianInput = `
  input GuardianInput {
    firstName: String!
    intakeFormID: String!
    lastName: String!
    relation: String!
  }
`;

export default [Guardian, GuardianInput];
