const Courtroom = `
  type Courtroom {
    courtDates: [CourtDate]!
    name: String!
  }
`;

const CourtroomInput = `
  input CourtroomInput {
    name: String!
  }
`;

export default [Courtroom, CourtroomInput];
