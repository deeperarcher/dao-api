import { getIntakeForms, getListings } from './forms';

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
