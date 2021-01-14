const LegalStatusEvent = `
  """
  Events which update the legal status of one or more petitions.  
  A court may CONTINUE a status for petition(s), or it may DISCHARGE one status and ORDER another (2 events).
  """
  type LegalStatusEvent {
    "Whether this event is to CONTINUE, ORDER, or DISCHARGE a legal status"
    type: EventType!

    "The type legal status this event regards (e.g. Pretrial, Probation, Withdrawn)"
    status: String!

    "The date of this event"
    date: String!

    "Whether this DISCHARGE event is POSITIVE, NEGATIVE, or NEUTRAL in nature"
    dischargeNature: Nature

    "The action resulting from this DISCHARGE event"
    dischargeOutcome: String

    "The reasons given for this event"
    reasons: [String]
  }
`;

const Petition = `
  """
  A formal legal request for charges against one youth for one incident
  """
  type Petition {
    "The external unique identifier of this petition"
    petitionNumber: String!

    "The unique identifier of the incident associated with this petition"
    incidentID: String!
    
    "TODO why is this here?"
    DCNum: String

    "The charges filed on this petition"
    charges: [PetitionCharge]
    
    "The date this petition was filed"
    dateFiled: String
    
    "Whether this petition was direct filed to adult court on intake"
    isDirectFiled: Boolean
    
    "Whether this petition was diverted on intake" 
    isDiverted: Boolean
    
    "Whether this petition was transferred from another county"
    isTransferFromOtherCounty: Boolean
    
    "All legal status events for this petition"
    legalStatusEvents: [LegalStatusEvent]!
    
    "The first name of the victim for this petition"
    victimFirstName: String
    
    "The last name of the victim for this petition"
    victimLastName: String
  }
`;

const PetitionCharge = `
  """
  A specific crime alleged on a petition
  """
  type PetitionCharge {
    "The internal unique identifier of this charge"
    chargeID: String!

    "The legal name of the crime of this charge"
    name: String
    
    "The legal code address of the crime of this charge"
    code: String
    
    "The formal classification of severity of this crime (e.g. F1, M)"
    grade: String
    
    "Whether this is the lead charge of the petition"
    isLead: Boolean

    "The categorical grouping of this charge (e.g. TODO)"
    category: String
  }
`;

const Query = `
  type Query {
    "Retrieve data about collection of petitions"
    petitions: [Petition!]!
  }
`;

export default [LegalStatusEvent, Petition, PetitionCharge, Query];
