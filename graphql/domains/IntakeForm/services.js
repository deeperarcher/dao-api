import IntakeForm from '../../../server/models/IntakeForm';

export async function getIntakeForms(_, { PID }) {
  let response;
  const query = IntakeForm.find({});

  if (PID) {
    query = IntakeForm.find({ PID });
  }

  try {
    response = await query.exec();
  } catch (err) {
    console.error('IntakeForm get fail:', err);
  }

  return response;
}

export async function getOneIntakeForm(_, { _id }) {
  let response;
  const query = IntakeForm.find({});

  if (_id) {
    query.find({ _id });
  }

  try {
    response = await query.exec().then(r => r.map(form => form.toObject()));
  } catch (err) {
    console.error('IntakeForm get fail:', err);
  }

  return response;
}

export async function insertIntakeForm(_, { input }) {
  const { ID } = await new IntakeForm(input)
    .save()
    .catch(err => console.log('ERR', err));
  return ID;
}
