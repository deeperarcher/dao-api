import * as faker from 'faker';

import LIST from '../input-lists';

import Guardian from './Guardian';
import { formatDate, fromList, intoArray } from './utilities';

export default class Youth {
  constructor() {
    this.address = faker.address.streetAddress();
    this.dateOfBirth = formatDate(
      faker.date.between('2003-01-01', '2008-12-31')
    );

    this.firstName = faker.name.firstName();
    this.grade = faker.random.number(6) + 6; // 6-12
    this.guardians = intoArray(2, () => new Guardian());
    this.isLatino = faker.random.boolean();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.PID = faker.random.number(10000).toString();
    this.race = fromList(LIST.Race);
    this.school = faker.random.arrayElement(LIST.School);
    this.sex = fromList(LIST.Sex);
    this.SID = (faker.random.number(89999) + 10000).toString();
    this.zip = faker.address.zipCodeByState('PA');
  }
}
