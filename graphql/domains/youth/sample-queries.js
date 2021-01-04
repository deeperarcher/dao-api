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
      chargeID
      code
      name
      isLead
      grade
      category
    }
  }
`;

export const youthQuery = `
  query ($PID: Int!) {
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
