export function deriveArrest(intakeForm) {
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

export function deriveIncidents(intakeForm) {
  return intakeForm.incidents.map(incident => ({
    incidentAddress: incident.incidentAddress,
    incidentDate: incident.incidentDate,
    incidentDistrict: incident.incidentDistrict,
    incidentID: incident.incidentID,
    incidentType: incident.incidentType,
    incidentZip: incident.incidentZip,
    isIncidentTimeKnown: incident.isIncidentTimeKnown,
  }));
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
    DCNum: petition.DCNum,
    incidentID: petition.incidentID,
    isDirectFiled: petition.isDirectFiled,
    isDiverted: petition.isDiverted,
    isTransferFromOtherCounty: petition.isTransferFromOtherCounty,
    petitionNumber: petition.petitionNumber,
    legalStatusEvents: [deriveIntialStatusEvent(petition)],
  }));
}
