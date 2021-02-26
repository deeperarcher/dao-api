const apiProps = `
  dateOfBirth
  firstName
  lastName
  PID

  intakeForms {
    DA
    note
  }

  listings {
    DA
    note
  }
`;

export const youthQuery = `
  query($PID: String!) {
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
