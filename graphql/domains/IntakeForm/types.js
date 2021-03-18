const IntakeForm = `
  type IntakeForm {
    arrest: Arrest!
    callIn: CallIn
    charges: [Charge]!
    courtOrderEvents: [CourtOrderEvent]!
    DA: String!
    diversion: Diversion
    evaluation: Evaluation
    incidents: [Incident]!
    initialHearing: CourtDate!
    intakeConference: IntakeConference
    note: String
    petitions: [Petition]!
    victims: [Victim]!
    youth: Youth!
}`;

const IntakeFormInput = `
  input IntakeFormInput {
    arrest: ArrestInput!
    callIn: CallInInput
    charges: [ChargeInput]!
    courtOrderEvents: [CourtOrderEventInput]!
    DA: String!
    diversion: DiversionInput
    evaluation: EvaluationInput
    incidents: [IncidentInput]!
    initialHearing: CourtDateInput!
    intakeConference: IntakeConferenceInput
    note: String
    petitions: [PetitionInput]!
    victims: [VictimInput]
    youth: YouthInput!
  }`;

const Mutation = `
  type Mutation {
    insertIntakeForm(input: IntakeFormInput): String!
  }
`;

export default [IntakeForm, IntakeFormInput, Mutation];
