const sampleProps = `
  arrest {
    date
  }
  callIn {
    DRAIAction
  }
  charges {
    ID
  }
  courtOrderEvents {
    order
  }
  DA
  diversion {
    diversionType
  }
  evaluation {
    diagnoses
  }
  incidents {
    date
    ID
    zip
  }
  initialHearing {
    courtroom {
      name
    }
    date
  }
  intakeConference {
    outcome
  }
  note
  petitions {
    dateFiled
    petitionNumber
  }
  youth {
    firstName
    guardians {
      firstName
    }
    PID
  }
  victims {
    lastName
  }
`;

export const intakeFormQuery = `
  query {
    intakeForms {
      ${sampleProps}
    }
  }
`;

const input = {
  arrest: {
    date: '1603354380000',
    district: '13',
    officers: ['12452415', '15623452'],
    petitionNumbers: ['1742561'],
    referralDate: '1603380840000',
  },
  callIn: {
    date: '2021-03-17',
    DRAIAction: 'FOLLOW_RELEASE',
    DRAIScore: 0,
    holdFacility: 'PJJSC',
    overrideHoldReasons: ['drive cross-platform', 'Berkshire payment'],
    wasDRAIAdministered: false,
  },
  charges: [
    {
      category: 'a',
      code: 'a',
      grade: 'a',
      ID: 'charge1',
      isLead: true,
      name: 'the charge',
      petitionNumber: '1742561',
    },
  ],
  courtOrderEvents: [],
  DA: 'Sternamin',
  diversion: {
    diversionType: 'Cambridgeshire',
    reasonsNoDiversion: ['Right-sized Movies'],
    referralDate: '2021-03-17',
    referralSource: 'Balanced',
    YAPPanelDistrict: '1',
  },
  evaluation: {
    diagnoses: ['OTHER', 'AUTISM_SPECTRUM', 'ANXIETY'],
    traumas: ['ABUSE_DOMESTIC_VIOLENCE', 'FAMILY_INCARCERATION'],
    treatments: ['SERVICES_ACTIVE', 'MEDICATION_PAST'],
  },
  incidents: [
    {
      address: '124 Streetsville Rd.',
      date: '1603324800000',
      DCNum: '1245641-12',
      district: '12',
      ID: '124STREETS1603324800000',
      incidentType: 'School',
      isTimeKnown: true,
      petitionNumber: '1742561',
      zip: '19148-1234',
    },
  ],
  initialHearing: {
    courtroom: {
      name: '3E',
    },
    date: '2020-11-05',
  },
  intakeConference: {
    date: '2021-03-18',
    DHSStatusAtArrest: 'NONE',
    intakeConferenceType: 'DA',
    outcome: 'FTA',
  },
  note: 'test note',
  petitions: [
    {
      dateFiled: '1603324800000',
      incidentID: '124STREETS1603324800000',
      isDirectFiled: false,
      isDiverted: true,
      isGunCase: true,
      isGunInvolved: true,
      isTransferFromOtherCounty: false,
      petitionNumber: '1742561',
    },
  ],
  victims: [
    {
      firstName: 'Firstname',
      lastName: 'Doe',
      petitionNumber: '1742561',
    },
  ],
  youth: {
    address: 'MyAddr1',
    dateOfBirth: '1035158400000',
    firstName: 'Myfirst',
    grade: '12',
    guardians: [
      {
        firstName: 'MyGuard1F',
        lastName: 'MyGuard1L',
        relation: 'Mother',
      },
      {
        firstName: 'MyGuard2F',
        lastName: 'MyGuard2L',
        relation: 'Mother',
      },
    ],
    isLatino: false,
    lastName: 'Mylast',
    phoneNumber: '7703620427',
    PID: '1234',
    race: 'African American',
    school: 'South Philadelphia HS',
    sex: 'Male',
    SID: '1245511',
    zip: '123123-123',
  },
};

export const response = [
  {
    arrest: { date: '1603354380000' },
    callIn: { DRAIAction: 'FOLLOW_RELEASE' },
    charges: [{ ID: 'charge1' }],
    courtOrderEvents: [],
    DA: 'Sternamin',
    diversion: { diversionType: 'Cambridgeshire' },
    evaluation: { diagnoses: ['OTHER', 'AUTISM_SPECTRUM', 'ANXIETY'] },
    incidents: [
      {
        date: '1603324800000',
        ID: '124STREETS1603324800000',
        zip: '19148-1234',
      },
    ],
    initialHearing: {
      courtroom: {
        name: '3E',
      },
      date: '2020-11-05',
    },
    intakeConference: { outcome: 'FTA' },
    note: 'test note',
    petitions: [
      {
        dateFiled: '1603324800000',
        petitionNumber: '1742561',
      },
    ],
    victims: [
      {
        lastName: 'Doe',
      },
    ],
    youth: {
      firstName: 'Myfirst',
      guardians: [{ firstName: 'MyGuard1F' }, { firstName: 'MyGuard2F' }],
      PID: '1234',
    },
  },
];

const sampleInputProps = JSON.stringify(input).replace(/"([^"]+)":/g, '$1:');

export const insertIntakeForm = `
   mutation {
    insertIntakeForm(
      input: ${sampleInputProps},
    )
  }
`;
