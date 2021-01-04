const apiProps = `
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
  courtOrderEvents {
    eventType
    isSupervision
    order
    petitionNumbers
    provider
    reasons
  }
  courtroom
  date
  DA
  legalStatusEvents {
    date
    dischargeNature
    dischargeOutcome
    eventType
    petitionNumbers
    reasons
    status
  }
  notes
  PID
`;

// TODO: make this more realistic data
export const sampleForm = {
  adjudications: [],
  admissions: [],
  certifications: [],
  continuances: [],
  courtOrderEvents: [],
  courtroom: 'CR1234',
  date: '2014-10-12',
  DA: 'Sternamin',
  legalStatusEvents: [
    {
      date: '2014-10-12',
      dischargeNature: 'POSITIVE',
      dischargeOutcome: '',
      eventType: 'DISCHARGE',
      petitionNumbers: ['1742561'],
      reasons: [],
      status: 'WITHDRAWN',
    },
  ],
  notes: 'test note',
  PID: 1,
};

export const listingQuery = `
  query {
    listings {
      ${apiProps}
    }
  }
`;

export const insertListing = `
   mutation {
    insertListing(
      input: ${JSON.stringify(sampleForm).replace(/"([^"]+)":/g, '$1:')},
    ) {
      ${apiProps}
    }
  }
`;
