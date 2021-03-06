const sampleProps = `
adjudications {
  charge {
    ID
  }
  date
  reasons
}
admissions {
  charge {
    ID
  }
  date
  result
}
certifications {
  date
  petition {
    petitionNumber
  }
}
continuances {
  continuanceType
  date
  listingStatus
  petition {
    petitionNumber
  }
  reasons
}
courtOrders {
  courtOrderType
  isSupervision
  order
  petition {
    petitionNumber
  }
  reasons
  serviceProvider {
    name
  }
}
courtDate {
  courtroom {
    name
  }
  date
}
DA
legalStatusEvents {
  date
  dischargeNature
  dischargeOutcome
  eventType
  reasons
  status
}
listingType
nextListing {
  courtroom {
    name
  }
  date
}
note
PID
`;

export const listingQuery = `
  query {
    listings {
      ${sampleProps}
    }
  }
`;

const input = {
  adjudications: [],
  admissions: [],
  certifications: [],
  chargeGradeEvents: [],
  continuances: [],
  courtDate: {
    courtroom: { name: 'CR1234' },
    date: '2014-10-12',
  },
  courtOrders: [],
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
  listingType: 'a listing-y listing',
  nextListing: {
    courtroom: { name: 'CR1234' },
    date: '2014-11-12',
  },
  note: 'test note',
  petitionNumbers: ['1742561'],
  PID: '1234',
};

export const response = [
  {
    adjudications: [],
    admissions: [],
    certifications: [],
    continuances: [],
    courtDate: {
      courtroom: { name: 'CR1234' },
      date: '2014-10-12',
    },
    courtOrders: [],
    DA: 'Sternamin',
    legalStatusEvents: [
      {
        date: '2014-10-12',
        dischargeNature: 'POSITIVE',
        dischargeOutcome: '',
        eventType: 'DISCHARGE',
        reasons: [],
        status: 'WITHDRAWN',
      },
    ],
    listingType: 'a listing-y listing',
    nextListing: {
      courtroom: { name: 'CR1234' },
      date: '2014-11-12',
    },
    note: 'test note',
    PID: '1234',
  },
];

const sampleInputProps = JSON.stringify(input).replace(/"([^"]+)":/g, '$1:');

export const insertListing = `
   mutation {
    insertListing(
      input: ${sampleInputProps},
    )
  }
`;
