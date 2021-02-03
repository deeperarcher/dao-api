import IntakeForm from '../server/models/IntakeForm';
import Listing from '../server/models/Listing';

export async function getIntakeForms(_, { isGunInvolvedArrest, PID }) {
  let response;
  let query = IntakeForm.find({});

  if (PID) {
    query = IntakeForm.find({
      'youth.PID': PID,
    });
  } else if (typeof isGunInvolvedArrest === 'boolean') {
    query = IntakeForm.find({
      'arrest.isGunInvolvedArrest': isGunInvolvedArrest,
    });
  }

  try {
    response = await query.exec();
  } catch (err) {
    console.error('IntakeForm get fail:', err);
  }

  return response;
}

export async function getOneIntakeForm(_, { PID, _id }) {
  let response;
  const query = IntakeForm.find({});

  if (_id) {
    query = IntakeForm.find({ _id });
  } else if (PID) {
    query = IntakeForm.find({ PID });
  }

  try {
    response = await query.exec().then(r => r.map(form => form.toObject()));
  } catch (err) {
    console.error('IntakeForm get fail:', err);
  }

  return response;
}

export async function getListings(_, { PID }) {
  let response;
  let query = Listing.find({});

  if (PID) {
    query = Listing.find({ PID });
  }

  try {
    response = await query.exec();
  } catch (err) {
    console.error('Listing get fail:', err);
  }

  return response;
}

export async function getListingsByPID(intakeForms) {
  return await intakeForms.reduce(async (acc, intakeForm) => {
    const PID = intakeForm.youth.PID;
    const currentListingsAtPID = acc[PID];

    if (currentListingsAtPID) return acc;
    const newListingsAtPID = await getListings(null, { PID });
    const payload = {
      ...acc,
      [PID]: newListingsAtPID,
    };

    return payload;
  }, {});
}

export async function insertIntakeForm(_, { input }) {
  const {
    youth: { PID },
  } = await new IntakeForm(input).save().catch(err => console.log('ERR', err));
  return PID;
}

export async function insertListing(_, { input }) {
  const { PID } = await new Listing(input)
    .save()
    .catch(err => console.log('ERR', err));

  return PID;
}
