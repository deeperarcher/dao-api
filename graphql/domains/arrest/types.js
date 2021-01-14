const Arrest = `
  """
  An apprehension of a youth
  """
  type Arrest {
    "The unique identifier of this arrest"
    SID: String

    "The date this arrest occurred"
    arrestDate: String

    "The police district responsible for this arrest"
    arrestingDistrict: String

    "Whether this arrest includes gun-related charges"
    isGunCase: Boolean
    
    "Whether a gun was involved with this arrest"
    isGunInvolvedArrest: Boolean

    "Officers involved with this arrest"
    officers: [String]

    "The date this arrest was referred to TODO"
    referralDate: String
  }
`;

const Query = `
  type Query {
    "Retrieve data about a collection of arrests"
    arrests: [Arrest!]!
  }
`;

export default [Arrest, Query];
