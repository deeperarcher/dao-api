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

  incidentDate
  isIncidentTimeKnown
  incidentAddress
  incidentZip
  incidentDistrict
  incidentType
  victimFirstName
  victimLastName

  DCNum
  SID
  arrestDate
  arrestingDistrict
  referralDate
  isGunCase
  isGunInvolvedArrest
  officers
  isDirectFiled

  

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
    chargeIDs
    order
    isSupervision
    provider
    eventType
    reasons
  }


  petitions {
    petitionNum
    dateFiled
    isTransferFromOtherCounty
    legalStatus
    charges {
      code
      name
      isLead
      grade
      category
    }
  }
`;

const intakeFormQuery = `
  query {
    intakeForms {
      ${apiProps}
    }
  }
`;

export const insertIntakeForm = `
   mutation {
    insertIntakeForm(
      input: {
        PID: 1
        firstName: "Myfirst"
        lastName: "Mylast"
        dateOfBirth: "2002-10-21"
        sex: "Male"
        race: "African American"
        isLatino: false
        phoneNumber: "7703620427"
        address: "MyAddr1"
        zip: "123123-123"
        school: "South Philadelphia HS"
        grade: "12"

        guardian1FirstName: "MyGuard1F"
        guardian1LastName: "MyGuard1L"
        guardian1Relation: "Mother"

        guardian2FirstName: "MyGuard2F"
        guardian2LastName: "MyGuard2L"
        guardian2Relation: "Father"

        incidentDate: "2020-10-22"
        isIncidentTimeKnown: true
        incidentAddress: "124 Streetsville Rd."
        incidentZip: "19148-1234"
        incidentDistrict: "12"
        incidentType: "School"
        victimFirstName: "Michael"
        victimLastName: "Tyson"
    
        DCNum: "1245641-12"
        SID: "1245511"
        arrestDate: "2020-10-22T08:13:00.000Z"
        arrestingDistrict: "13"
        referralDate: "2020-10-22T15:34:00.000Z"
        isGunCase: true
        isGunInvolvedArrest: true
        officers: ["12452415", "15623452"]
        isDirectFiled: false

        DA: "Sternamin"
        notes: "test note"

        diagnoses: []
        traumaTypes: []
        treatments: []

        callInDate: "2020-11-02"
        wasDRAIAdministered: true
        DRAIScore: 18
        DRAIAction: "Release"
        callInHoldFacility: "PJJSC"
        callInOverrideHoldReasons: ["N/A"]

        intakeConferenceDate: "2020-11-02"
        intakeConferenceType: "Probation"
        intakeConferenceOutcome: "Release to Diversion"
        DHSStatusAtArrest: "Inactive"

        courtOrderEvents: [{
          chargeIDs: [
            "1742561-13-acb", 
            "1742561-85-ahos", 
            "2164655-16-peiw", 
            "2164655-80-afef"
          ]
          order: "ERC"
          isSupervision: true
          provider: "NET"
          eventType: "ORDER"
          reasons: ["DRAI Score"]
        }]

        diversionType: "Pre-trial"
        diversionReferralDate: "2020-11-03"
        diversionReferralSource: "Intake Conference"
        YAPPanelDistrict: "12"
        ReasonsNoDiversion: ["N/A"]
        
        initialHearingDate: "2020-11-05"
        initialHearingLocation: "3E"
        petitions: [
          { 
            petitionNum: "1742561"
            dateFiled: "2020-10-22"
            isTransferFromOtherCounty: false
            charges: [
              { 
                code: "13-acb"
                name: "Aggravated Assault"
                isLead: true
                grade: "F1"
                category: "Assault"
              }, 
              { 
                code: "85-ahos"
                name: "Theft by Taking"
                isLead: false
                grade: "F2"
                category: "Property"
              }
            ] 
          },
          { 
            petitionNum: "2164655", 
            dateFiled: "2020-10-22" 
            isTransferFromOtherCounty: false
            charges: [
              { 
                code: "16-peiw"
                name: "Possession of Controlled Substance"
                isLead: true
                grade: "F"
                category: "Drug"
              }, 
              { 
                code: "80-afef"
                name: "Possession of Drug Paraphernalia"
                isLead: false
                grade: "M"
                category: "Drug"
              }
            ] 
          }
        ]

      }
    ) {
      ${apiProps}
    }
  }
`;
