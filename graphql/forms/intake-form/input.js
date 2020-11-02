const IntakeFormInput = `
  input IntakeFormInput {
    PID: Int
    firstName: String
    lastName: String
    dateOfBirth: String
    sex: String
    race: String
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
    isIncidentTimeKnown: Boolean
    incidentAddress: String

    arrestDate: String
    referralDate: String
    arrestingDistrict: Int

    officers: [String]
    petitions: [PetitionInput]
  }`;

const PetitionInput = `
  input PetitionInput {
    petitionNumber: String
    dateFiled: String
    charges: [PetitionChargeInput]
  }`;

const PetitionChargeInput = `
  input PetitionChargeInput {
    code: String
    grade: String
  }`;

export default [IntakeFormInput, PetitionChargeInput, PetitionInput];
