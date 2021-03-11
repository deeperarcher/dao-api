import * as faker from 'faker';

export default class Victim {
  constructor({ petitionNumber }) {
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.petitionNumber = petitionNumber;
  }
}
