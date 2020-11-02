const apiProps = `
  PID
  firstName
  lastName
  dateOfBirth
  sex
  race
  isLatino
  phoneNumber
  address1
  address2
  zip

  guardian1FirstName
  guardian1LastName
  guardian1Relation
  guardian2FirstName
  guardian2LastName
  guardian2Relation

  incidentDate
  isIncidentTimeKnown
  incidentAddress
  arrestDate
  timeOfDAReferral
  arrestingDistrict

  officers
  petitions {
    petitionNumber
    dateFiled
    charges {
      code
      grade
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

const insertIntakeForm = `
  mutation {
    insertIntakeForm(
      input: {
        PID: 1
        firstName: "Myfirst"
        lastName: "Mylast"
        dateOfBirth: "10/21/1989"
        sex: MALE
        race: "African American"
        isLatino: false
        phoneNumber: "7703620427"
        address1: "MyAddr1"
        address2: "MyAddr2"
        zip: "123123-123"
        guardian1FirstName: "MyGuard1F"
        guardian1LastName: "MyGuard1L"
        guardian1Relation: "Mother"
        guardian2FirstName: "MyGuard2F"
        guardian2LastName: "MyGuard2L"
        guardian2Relation: "Father"
        incidentDate: "10202020"
        isIncidentTimeKnown: true
        incidentAddress: "124 Streetsville Rd."
        arrestDate: "10212020"
        referralDate: "10222020"
        arrestingDistrict: 13
        officers: ["1231231", "44241241"]
        petitions: [
          { petitionNumber: "1", dateFiled: "10212020" charges: [{ code: "13-acb", grade: "F1" }, { code: "85-ahos", grade: "F2" }] },
          { petitionNumber: "2", dateFiled: "10212020" charges: [{ code: "51512kjb", grade: "F" }, { code: "191b91d", grade: "M" }] }
        ]
      }
    ) {
      ${apiProps}
    }
  }
`;
