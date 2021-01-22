import * as faker from 'faker';

export default class Guardian {
  constructor() {
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.relation = 'mother';
  }
}
