import IntakeForm from '../../../server/models/intake-form';

export async function get({ PID, petitionNumbers }) {
  let response;
  const query = IntakeForm.find({});

  if (PID) {
    query.find({ PID });
  }

  if (petitionNumbers) {
    query.find({ 'petitions.petitionNumber': { $in: petitionNumbers } });
  }

  try {
    response = await query.exec();
  } catch (err) {
    console.error('IntakeForm get fail:', err);
  }

  return response.map(form => form.toObject());
}
