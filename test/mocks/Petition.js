import * as faker from 'faker';

import { formatDate } from './utilities';

const { date, random } = faker;
const { boolean, number } = random;

function generatePetitionNumber() {
  return `CP-${number(50)}-JV-${
    number(999999) + 1000000
  }-${date.recent().getFullYear()}`;
}
export default class Petition {
  constructor() {
    this.dateFiled = formatDate(date.recent());
    this.isDiverted = boolean();
    this.isDirectFiled = boolean();
    this.isGunCase = boolean();
    this.isGunInvolved = boolean();
    this.isTransferFromOtherCounty = boolean();
    this.petitionNumber = generatePetitionNumber();
  }
}
