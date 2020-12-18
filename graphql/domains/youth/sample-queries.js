const apiProps = `
  dateOfBirth
  firstName
  lastName
  PID
  incidents {
    incidentDate
    isIncidentTimeKnown
    incidentAddress
    incidentZip
    incidentDistrict
    incidentType
    victimFirstName
    victimLastName
  }
  arrests {
    arrestDate
    arrestingDistrict
    DCNum
    isGunCase
    isGunInvolvedArrest
    officers
    referralDate
    SID
  }

  petitions {
    petitionNumber
    dateFiled
    isDirectFiled
    isDiverted
    isTransferFromOtherCounty
    charges {
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
