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
  date
  knownTime
  timeOfDAReferral
  arrestingDistrict
`;

export default [
  `mutation {
  insertIntakeForm(
    input: {
      PID: 12345
      firstName: "MyFirstName"
      lastName: "MyLastName"
      dateOfBirth: "12/12/1999"
      sex: MALE
      race: Race1
      isLatino: true
      phoneNumber: "7701234567"
      address1: "123 Fake St."
      address2: "Fl. 0"
      zip: "12345-0987"
      guardian1FirstName: "guardian1FirstName"
      guardian1LastName: "guardian1LastName"
      guardian1Relation: Relation1
      guardian2FirstName: "guardian1FirstName"
      guardian2LastName: "guardian2LastName"
      guardian2Relation: Relation2
      date: "12211999"
      knownTime: true
      timeOfDAReferral: "12211999200000"
      arrestingDistrict: 19
    }
  ) {
    ${apiProps}
  }
}
`,
];
