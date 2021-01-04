const apiProps = `
  PID
  firstName
  lastName
  dateOfBirth
  sex
  race
  isLatino
  phoneNumber
  address
  zip
  school
  grade

  guardian1FirstName
  guardian1LastName
  guardian1Relation

  guardian2FirstName
  guardian2LastName
  guardian2Relation

  incidents {
    incidentDate
    incidentID
    isIncidentTimeKnown
    incidentAddress
    incidentZip
    incidentDistrict
    incidentType
  }

  SID
  arrestDate
  arrestingDistrict
  referralDate
  isGunCase
  isGunInvolvedArrest
  officers

  DA
  notes

  diagnoses
  traumaTypes
  treatments
  
  callInDate
  wasDRAIAdministered
  DRAIScore
  DRAIAction
  callInHoldFacility
  callInOverrideHoldReasons
  
  intakeConferenceDate
  intakeConferenceType
  intakeConferenceOutcome
  DHSStatusAtArrest

  diversionType
  diversionReferralDate
  diversionReferralSource
  YAPPanelDistrict
  ReasonsNoDiversion
  
  initialHearingDate
  initialHearingLocation

  courtOrderEvents {
    petitionNumbers
    order
    isSupervision
    provider
    eventType
    reasons
  }

  petitions {
    dateFiled
    DCNum
    isDirectFiled
    isDiverted
    isTransferFromOtherCounty
    incidentID
    petitionNumber
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

export const sampleForm = {
  PID: 1,
  firstName: 'Myfirst',
  lastName: 'Mylast',
  dateOfBirth: '1035158400000',
  sex: 'Male',
  race: 'African American',
  isLatino: false,
  phoneNumber: '7703620427',
  address: 'MyAddr1',
  zip: '123123-123',
  school: 'South Philadelphia HS',
  grade: '12',

  guardian1FirstName: 'MyGuard1F',
  guardian1LastName: 'MyGuard1L',
  guardian1Relation: 'Mother',

  guardian2FirstName: 'MyGuard2F',
  guardian2LastName: 'MyGuard2L',
  guardian2Relation: 'Father',

  incidents: [
    {
      incidentID: '124STREETS1603324800000',
      incidentDate: '1603324800000',
      isIncidentTimeKnown: true,
      incidentAddress: '124 Streetsville Rd.',
      incidentZip: '19148-1234',
      incidentDistrict: '12',
      incidentType: 'School',
    },
  ],

  SID: '1245511',
  arrestDate: '1603354380000',
  arrestingDistrict: '13',
  referralDate: '1603380840000',
  isGunCase: true,
  isGunInvolvedArrest: true,
  officers: ['12452415', '15623452'],

  DA: 'Sternamin',
  notes: 'test note',

  diagnoses: [],
  traumaTypes: [],
  treatments: [],

  callInDate: '1604275200000',
  wasDRAIAdministered: true,
  DRAIScore: 18,
  DRAIAction: 'Release',
  callInHoldFacility: 'PJJSC',
  callInOverrideHoldReasons: ['N/A'],

  intakeConferenceDate: '1604275200000',
  intakeConferenceType: 'Probation',
  intakeConferenceOutcome: 'Release to Diversion',
  DHSStatusAtArrest: 'Inactive',

  diversionType: 'Pre-trial',
  diversionReferralDate: '1604361600000',
  diversionReferralSource: 'Intake Conference',
  YAPPanelDistrict: '12',
  ReasonsNoDiversion: ['N/A'],

  initialHearingDate: '2020-11-05',
  initialHearingLocation: '3E',

  petitions: [
    {
      charges: [
        {
          category: 'Assault',
          code: '13-acb',
          grade: 'F1',
          isLead: true,
          name: 'Aggravated Assault',
        },
        {
          category: 'Property',
          code: '85-ahos',
          grade: 'F2',
          isLead: false,
          name: 'Theft by Taking',
        },
      ],
      dateFiled: '1603324800000',
      DCNum: '1245641-12',
      incidentID: '124STREETS1603324800000',
      isDirectFiled: false,
      isDiverted: true,
      isTransferFromOtherCounty: false,
      petitionNumber: '1742561',
      victimFirstName: 'Michael',
      victimLastName: 'Tyson',
    },
    {
      charges: [
        {
          category: 'Drug',
          code: '16-peiw',
          grade: 'F',
          isLead: true,
          name: 'Possession of Controlled Substance',
        },
        {
          category: 'Drug',
          code: '80-afef',
          grade: 'M',
          isLead: false,
          name: 'Possession of Drug Paraphernalia',
        },
      ],
      dateFiled: '1603324800000',
      DCNum: null,
      incidentID: '124STREETS1603324800000',
      isDirectFiled: true,
      isDiverted: false,
      isTransferFromOtherCounty: false,
      petitionNumber: '2164655',
      victimFirstName: null,
      victimLastName: null,
    },
  ],
  courtOrderEvents: [
    {
      petitionNumbers: ['1742561', '2164655'],
      eventType: 'ORDERED',
      isSupervision: true,
      order: 'ERC',
      provider: 'NET',
      reasons: ['DRAI Score'],
    },
  ],
};

export const intakeFormQuery = `
  query {
    intakeForms {
      ${apiProps}
    }
  }
`;

export const insertIntakeForm = `
   mutation {
    insertIntakeForm(
      input: ${JSON.stringify(sampleForm).replace(/"([^"]+)":/g, '$1:')},
    ) {
      ${apiProps}
    }
  }
`;
