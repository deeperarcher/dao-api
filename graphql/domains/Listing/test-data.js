const sampleProps = `
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
  courtDate: { date: '2014-10-12', courtroom: { name: 'CR1234' } },
  courtOrders: [],
  DA: 'Sternamin',
  ID: 'testlisting1',
  intakeFormID: 'testintakeform1',
  legalStatusEvents: [
    {
      date: '2014-10-12',
      dischargeNature: 'POSITIVE',
      dischargeOutcome: '',
      eventType: 'DISCHARGE',
      listingID: 'testlisting1',
      petitionNumbers: ['1742561'],
      reasons: [],
      status: 'WITHDRAWN',
    },
  ],
  petitionNumbers: ['1742561'],
  listingType: 'a listing-y listing',
  nextListing: { date: '2014-11-12', courtroom: { name: 'CR1234' } },
  note: 'test note',
  intakeFormID: 'testintakeform1',
};

export const response = [
  {
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
        reasons: [],
        status: 'WITHDRAWN',
        eventType: 'DISCHARGE',
      },
    ],
    listingType: 'a listing-y listing',
    nextListing: {
      courtroom: { name: 'CR1234' },
      date: '2014-11-12',
    },
    note: 'test note',
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
