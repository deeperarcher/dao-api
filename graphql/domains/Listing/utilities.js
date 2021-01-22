export function reduceListings(listings) {
  return listings.reduce(
    (lastForm, thisForm) => ({
      adjudications: [...lastForm.adjudications, ...thisForm.adjudications],
      admissions: [...lastForm.admissions, ...thisForm.admissions],
      certifications: [...lastForm.certifications, ...thisForm.certifications],
      continuances: [...lastForm.continuances, ...thisForm.continuances],
      courtOrderEvents: [
        ...lastForm.courtOrderEvents,
        ...thisForm.courtOrderEvents,
      ],
      legalStatusEvents: [
        ...lastForm.legalStatusEvents,
        ...thisForm.legalStatusEvents,
      ],
    }),
    {
      adjudications: [],
      admissions: [],
      certifications: [],
      continuances: [],
      courtOrderEvents: [],
      legalStatusEvents: [],
    }
  );
}
