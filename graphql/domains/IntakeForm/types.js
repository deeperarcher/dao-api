const IntakeForm = `
  type IntakeForm {
    arrest: Arrest!
    charges: [Charge]!
    courtOrders: [CourtOrder]!
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
    courtOrders: [CourtOrderInput]!
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
