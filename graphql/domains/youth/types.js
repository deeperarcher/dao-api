const Youth = `
  """
  An individual in the Philadelphia Juvenile Court System
  """
  type Youth {
    "The unique external identifier of this youth"
    PID: Int!

    "The first name of this youth"
    firstName: String!

    "The last name of this youth"
    lastName: String!

    "The date of birth of this youth"
    dateOfBirth: String!

    "All filed adjudications for charges on petitions opened for this youth"
    adjudications: [Adjudication]
    
    "All filed admissions for charges on petitions open for this youth"
    admissions: [Admission]

    "All recorded arrests for this youth"
    arrests: [Arrest!]!

    "All filed certifications for petitions opened for this youth"
    certifications: [Certification]

    "All filed continuances for petitions opened for this youth" 
    continuances: [Continuance]

    "All court order events for this youth"
    courtOrderEvents: [CourtOrderEvent]!
    
    "All reported incidents involving this youth"
    incidents: [Incident!]!

    "All legal status events for this youth"
    legalStatusEvents: [LegalStatusEvent]
    
    "All recorded listings for this youth"
    listings: [Listing!]
    
    "All opened petitions for this youth"
    petitions: [Petition!]!
  }
`;

const Query = `
  type Query {
    "Retrieve data about a single youth"
    youth(
      "The unique identifier of this youth"
      PID: Int!

      "(Optional) Identifiers for specific petitions of this youth to retrieve data about"
      petitionNumbers: [String]
    ): Youth!

    "Retrieve data about a collection of youths"
    youths: [Youth]!
  }
`;

export default [Youth, Query];
