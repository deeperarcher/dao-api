export default class Incident {
  constructor({ incidentAddress, incidentDate, incidentID, petitionNumber }) {
    this.address = incidentAddress;
    this.date = incidentDate;
    this.ID = incidentID;
    this.petitionNumber = petitionNumber;
  }
}
