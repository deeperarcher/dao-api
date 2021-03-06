const Incident = `
  type Incident {
    address: String
    date: String
    DCNum: String
    district: String
    ID: String!
    incidentType: String
    intakeForm: IntakeForm!
    isTimeKnown: Boolean
    petition: Petition!
    petitionNumber: String!
    victims: [Victim]!
    zip: String
  }
`;

const IncidentInput = `
  input IncidentInput {
    address: String
    date: String!
    district: String
    DCNum: String
    ID: String!
    incidentType: String
    isTimeKnown: Boolean
    petitionNumber: String!
    zip: String
  }
`;

export default [Incident, IncidentInput];
