const IntakeForm = `
  type IntakeForm {
    arrest: Arrest!
    charges: [Charge]!
    courtOrderEvents: [CourtOrderEvent]!
    DA: String!
    incidents: [Incident]!
    initialHearing: CourtDate!
    note: String
    petitions: [Petition]!
    victims: [Victim]!
    youth: Youth!
}`;

const IntakeFormInput = `
  input IntakeFormInput {
    arrest: ArrestInput!
    charges: [ChargeInput]!
    courtOrderEvents: [CourtOrderEventInput]!
    DA: String!
    incidents: [IncidentInput]!
    initialHearing: CourtDateInput!
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
