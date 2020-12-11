export function deriveArrest(intakeForm) {
  return {
    arrestDate: intakeForm.arrestDate,
    arrestingDistrict: intakeForm.arrestingDistrict,
    DCNum: intakeForm.DCNum,
    isGunCase: intakeForm.isGunCase,
    isGunInvolvedArrest: intakeForm.isGunInvolvedArrest,
    officers: intakeForm.officers,
    referralDate: intakeForm.referralDate,
    SID: intakeForm.SID,
  };
}

export function deriveIncident(intakeForm) {
  return {
    incidentAddress: intakeForm.incidentAddress,
    incidentDate: intakeForm.incidentDate,
    incidentDistrict: intakeForm.incidentDistrict,
    incidentType: intakeForm.incidentType,
    incidentZip: intakeForm.incidentZip,
    isIncidentTimeKnown: intakeForm.isIncidentTimeKnown,
    victimFirstName: intakeForm.victimFirstName,
    victimLastName: intakeForm.victimLastName,
  };
}

function deriveIntialStatusEvent(petition) {
  const status = (() => {
    if (petition.isDiverted) return 'Diversion';
    if (petition.isDirectFiled) return 'Adult';
    return 'Pretrial';
  })();

  return {
    date: petition.dateFiled,
    status,
    type: 'ORDERED',
  };
}

export function derivePetitions(intakeForm) {
  return intakeForm.petitions.map(petition => ({
    charges: petition.charges.map(charge => ({
      category: charge.category,
      code: charge.code,
      grade: charge.grade,
      isLead: charge.isLead,
      name: charge.name,
    })),
    dateFiled: petition.dateFiled,
    isDirectFiled: petition.isDirectFiled,
    isDiverted: petition.isDiverted,
    isTransferFromOtherCounty: petition.isTransferFromOtherCounty,
    petitionNum: petition.petitionNum,
    legalStatusEvents: [deriveIntialStatusEvent(petition)],
  }));
}
