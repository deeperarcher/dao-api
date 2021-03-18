const Evaluation = `
  type Evaluation {
    diagnoses: [String]
    traumas: [String]
    treatments: [String]
  }
`;

const EvaluationInput = `
  input EvaluationInput {
    diagnoses: [String]
    traumas: [String]
    treatments: [String]
  }
`;

export default [Evaluation, EvaluationInput];
