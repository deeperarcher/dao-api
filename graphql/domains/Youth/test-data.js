const apiProps = `
  dateOfBirth
  firstName
  lastName
  PID
  incidents {
    incidentDate
    incidentID
    isIncidentTimeKnown
    incidentAddress
    incidentZip
    incidentDistrict
    incidentType
  }
  arrests {
    arrestDate
    arrestingDistrict
    isGunCase
    isGunInvolvedArrest
    officers
    referralDate
    SID
  }

  petitions {
    petitionNumber
    dateFiled
    DCNum
    incidentID
    isDirectFiled
    isDiverted
    isTransferFromOtherCounty
    victimFirstName
    victimLastName
    charges {
      category
      code
      grade
      ID
      isLead
      name
    }
  }

  adjudications {
    chargeIDs
    date
    reasons
  }

  admissions {
    chargeIDs
    date
    result
  }

  certifications {
    date
    petitionNumbers
  }

  continuances {
    date
    listingStatus
    petitionNumbers
    reasons
  }

  courtOrders {
    courtOrderType
    isSupervision
    order
    petitionNumbers
    serviceProvider
    reasons
  }

  legalStatusEvents {
    date
    dischargeNature
    dischargeOutcome
    eventType
    petitionNumbers
    reasons
    status
  }

  listings {
    courtroom
    date
    DA
    notes
  }
`;

export const youthQuery = `
  query($PID: String!) {
    youth(PID: $PID) {
      ${apiProps}
    }
  }
`;

export const youthsQuery = `
  query {
    youths {
      ${apiProps}
    }
  }
`;
