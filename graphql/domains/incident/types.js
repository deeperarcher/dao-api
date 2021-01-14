const Incident = `
  """
  An alleged criminal act allegedly committed by one or more youths
  """
  type Incident {
    "The unique identifier of the incident"
    incidentID: String!
  
    "The date the incident occurred"
    incidentDate: String
  
    "Whether the incident date includes an accurate time"
    isIncidentTimeKnown: Boolean
    
    "The street address where the incident occurred"
    incidentAddress: String
    
    "The zip code where the incident occurred"
    incidentZip: String
    
    "The police district where the incident occurred"
    incidentDistrict: String
    
    "The categorical type of incident"
    incidentType: String
  }
`;

const Query = `
  type Query {
    "Retrieve data about a collection of incidents"
    incidents: [Incident!]!
  }
`;

export default [Incident, Query];
