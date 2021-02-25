import * as faker from 'faker';

import Guardian from './Guardian';

import { formatDate } from './utilities';

export default class Youth {
  constructor() {
    this.address = faker.address.streetAddress();
    this.dateOfBirth = formatDate(
      faker.date.between('2003-01-01', '2008-12-31')
    );
    this.firstName = faker.name.firstName();
    this.grade = faker.random.number(6) + 6; // 6-12 *untested
    this.guardians = [new Guardian()];
    this.isLatino = faker.random.boolean();
    this.lastName = faker.name.lastName();
    this.phoneNumber = '1231231234';
    this.PID = faker.random.number(10000).toString();
    this.race = 'white';
    this.school = 'Vare';
    this.sex = 'male';
    this.zip = faker.address.zipCodeByState('PA');
  }
}
