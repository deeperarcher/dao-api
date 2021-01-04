function deriveArrest(intakeForm) {
  return {
    arrestDate: intakeForm.arrestDate,
    arrestingDistrict: intakeForm.arrestingDistrict,
    isGunCase: intakeForm.isGunCase,
    isGunInvolvedArrest: intakeForm.isGunInvolvedArrest,
    officers: intakeForm.officers,
    referralDate: intakeForm.referralDate,
    SID: intakeForm.SID,
  };
}

function deriveLegalStatusEvents(intakeForm) {
  const petitionNumbersByStatus = {};
  intakeForm.petitions.forEach(petition => {
    const status = (() => {
      if (petition.isDiverted) return 'DIVERSION';
      if (petition.isDirectFiled) return 'ADULT';
      return 'PRETRIAL';
    })();

    if (petitionNumbersByStatus[status]) {
      petitionNumbersByStatus[status].push(petition.petitionNumber);
    } else {
      petitionNumbersByStatus[status] = [petition.petitionNumber];
    }
  });

  return Object.keys(petitionNumbersByStatus).map(status => ({
    date: intakeForm.petitions[0].dateFiled,
    status,
    eventType: 'ORDERED',
    petitionNumbers: petitionNumbersByStatus[status],
  }));
}

export function derivePetitions(intakeForm) {
  return intakeForm.petitions.map(petition => ({
    ...petition,
    charges: petition.charges.map(charge => ({
      ...charge,
      chargeID: `${petition.petitionNumber}${charge.code}`,
    })),
  }));
}

export function normalizeIntakeForm(intakeForm, petitionNumbers) {
  const petitions = derivePetitions(intakeForm).filter(p =>
    petitionNumbers
      ? petitionNumbers.some(num => num === p.petitionNumber)
      : true
  );

  const incidents = intakeForm.incidents.filter(i =>
    petitions.some(p => p.incidentID === i.incidentID)
  );

  return {
    ...intakeForm,
    arrest: deriveArrest(intakeForm),
    incidents,
    legalStatusEvents: deriveLegalStatusEvents(intakeForm),
    petitions,
  };
}

export function reduceIntakeForms({ intakeForms, petitionNumbers }) {
  return intakeForms
    .map(form => normalizeIntakeForm(form, petitionNumbers))
    .reduce(
      (lastForm, thisForm) => ({
        arrests: [...lastForm.arrests, thisForm.arrest],
        incidents: [...lastForm.incidents, ...thisForm.incidents],
        legalStatusEvents: [
          ...lastForm.legalStatusEvents,
          ...thisForm.legalStatusEvents,
        ],
        petitions: [...lastForm.petitions, ...thisForm.petitions],
      }),
      { arrests: [], incidents: [], legalStatusEvents: [], petitions: [] }
    );
}
