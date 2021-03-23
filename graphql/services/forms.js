import IntakeForm from '../../server/models/IntakeForm';
import Listing from '../../server/models/Listing';

export async function getIntakeForms(
  { isGunInvolved, PID } = { isGunInvolved: null, PID: null }
) {
  let response;
  let query = IntakeForm.find({});

  if (PID) {
    query = query.find({ 'youth.PID': PID });
  }

  if (typeof isGunInvolved === 'boolean') {
    if (isGunInvolved) {
      query = query.find({
        petitions: { $elemMatch: { isGunInvolved: true } },
      });
    } else {
      query = query.find({
        petitions: { $not: { $elemMatch: { isGunInvolved: true } } },
      });
    }
  }

  try {
    response = await query.exec();
  } catch (err) {
    console.error('IntakeForm get fail:', err);
  }

  return response;
}

export async function getOneIntakeForm(
  { _id, isGunInvolved, PID } = {
    _id: null,
    isGunInvolved: null,
    PID: null,
  }
) {
  let response;
  let query = IntakeForm.find({});

  if (_id) {
    query = query.find({ _id });
  }

  if (typeof isGunInvolved === 'boolean') {
    if (isGunInvolved) {
      query = query.find({
        petitions: { $elemMatch: { isGunInvolved: true } },
      });
    } else {
      query = query.find({
        petitions: { $not: { $elemMatch: { isGunInvolved: true } } },
      });
    }
  }

  if (PID) {
    query = query.find({ 'youth.PID': PID });
  }

  try {
    response = await query.findOne().exec();
  } catch (err) {
    console.error('IntakeForm get fail:', err);
  }

  return response;
}

export async function getListings({ PID } = { PID: null }) {
  let response;
  let query = Listing.find({});

  if (PID) {
    query = query.find({ PID });
  }

  try {
    response = await query.exec();
  } catch (err) {
    console.error('Listing get fail:', err);
  }

  return response;
}

export async function insertIntakeForm({ input }) {
  const {
    youth: { PID },
  } = await new IntakeForm(input)
    .save()
    .catch(err => console.error('ERR', err));

  return PID;
}

export async function insertListing({ input }) {
  const { PID } = await new Listing(input)
    .save()
    .catch(err => console.error('ERR', err));

  return PID;
}
