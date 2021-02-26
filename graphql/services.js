import IntakeForm from '../server/models/IntakeForm';
import Listing from '../server/models/Listing';

export async function getIntakeForms(
  { isGunInvolvedArrest, PID } = { isGunInvolvedArrest: null, PID: null }
) {
  let response;
  let query = IntakeForm.find({});
  if (PID) {
    query = query.find({ 'youth.PID': PID });
  }
  if (typeof isGunInvolvedArrest === 'boolean') {
    query = query.find({ 'arrest.isGunInvolvedArrest': isGunInvolvedArrest });
  }

  try {
    response = await query.exec();
  } catch (err) {
    console.error('IntakeForm get fail:', err);
  }
  return response;
}

export async function getOneIntakeForm(
  { isGunInvolvedArrest, PID, _id } = {
    isGunInvolvedArrest: null,
    PID: null,
    _id: null,
  }
) {
  let response;
  let query = IntakeForm.find({});

  if (_id) {
    query = query.find({ _id });
  }
  if (typeof isGunInvolvedArrest === 'boolean') {
    query = query.find({ 'arrest.isGunInvolvedArrest': isGunInvolvedArrest });
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

export async function getYouth(args) {
  const intakeForms = await getIntakeForms(args);
  const listings = await getListings(args);
  return {
    intakeForms,
    listings,
    ...intakeForms[0]?.youth,
  };
}

export async function getYouths(args) {
  const intakeForms = await getIntakeForms(args);
  const youthsByPID = intakeForms.reduce(
    (acc, form) =>
      acc[form.youth.PID]
        ? {
            ...acc,
            [form.youth.PID]: {
              ...form.youth,
              intakeForms: [...acc[form.youth.PID].intakeForms, form],
            },
          }
        : { ...acc, [form.youth.PID]: { ...form.youth, intakeForms: [form] } },
    {}
  );

  const listings = await getListings(args);
  listings.map(listing => {
    youthsByPID[listing.PID].listings
      ? youthsByPID[listing.PID].listings.push(listing)
      : (youthsByPID[listing.PID].listings = [listing]);
  });

  return Object.values(youthsByPID);
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
