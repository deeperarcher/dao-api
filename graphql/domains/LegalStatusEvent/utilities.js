export function deriveLegalStatusEvents(intakeForm) {
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
    eventType: 'ORDERED',
    petitionNumbers: petitionNumbersByStatus[status],
    status,
  }));
}
