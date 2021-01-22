const Charge = `
  type Charge {
    adjudications: [Adjudication]!
    admissions: [Admission]!
    category: String
    chargeGradeEvents: [ChargeGradeEvent]!
    code: String
    grade: String
    ID: String!
    isLead: Boolean
    name: String
    petition: Petition!
  }
`;

const ChargeInput = `
  input ChargeInput {
    category: String
    code: String
    grade: String
    ID: String!
    intakeFormID: String!
    isLead: Boolean
    name: String
    petitionNumber: String!
  }
`;

export default [Charge, ChargeInput];
