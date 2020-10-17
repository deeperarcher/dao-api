export default `
type Query {
  intakeForm(_id: String!): IntakeForm!
  intakeForms: [IntakeForm!]!
}

type Mutation {
  insertIntakeForm(input: IntakeFormInput):  IntakeForm!
}

type IntakeForm {
    PID:  Int!
    firstName: String
    lastName: String
    dateOfBirth: String
    sex: Sex
    race: Race
    isLatino: Boolean
    phoneNumber: String
    address1: String
    address2: String
    zip: String

    guardian1FirstName: String
    guardian1LastName: String
    guardian1Relation: Relation

    guardian2FirstName: String
    guardian2LastName: String
    guardian2Relation: Relation

    date: String
    knownTime:  Boolean 
    timeOfDAReferral: String
    arrestingDistrict: Int
}`;
