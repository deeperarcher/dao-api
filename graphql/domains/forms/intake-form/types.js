const Query = `
  type Query {
    intakeForm(_id: String!): IntakeForm!
    intakeForms: [IntakeForm!]!
  }`;

const Mutation = `
  type Mutation {
    insertIntakeForm(input: IntakeFormInput):  IntakeForm!
  }`;

const IntakeForm = `
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

    incidentDate: String
    isIncidentTimeKnown:  Boolean 
    incidentAddress: String

    arrestDate: String
    timeOfDAReferral: String
    arrestingDistrict: Int
    officers: [Int]

    petitions: [IntakeFormPetition]
}`;

const IntakeFormPetition = `
  type IntakeFormPetition {
    petitionNumber: Int
    dateFiled: String
    charges: [PetitionCharge]
  }
`;

const PetitionCharge = `
  type PetitionCharge {
    code: String
    grade: String
  }
`;

export default [
  IntakeForm,
  IntakeFormPetition,
  Mutation,
  PetitionCharge,
  Query,
];
