const Incident = `
  type Incident {
    incidentDate: String
    incidentID: String!
    isIncidentTimeKnown: Boolean
    incidentAddress: String
    incidentZip: String
    incidentDistrict: String
    incidentType: String
  }
`;

const Query = `
  type Query {
    incidents: [Incident!]!
  }
`;

export default [Incident, Query];
