const Incident = `
  type Incident {
    incidentDate: String
    isIncidentTimeKnown:  Boolean
    incidentAddress: String
    incidentZip: String
    incidentDistrict: String
    incidentType: String
    victimFirstName: String
    victimLastName: String
  }
`;

const Query = `
  type Query {
    incidents: [Incident!]!
  }
`;

export default [Incident, Query];
