import * as faker from 'faker';

import LIST from '../input-lists';

import { fromList } from './utilities';
export default class Victim {
  constructor({ petitionNumber }) {
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.petitionNumber = petitionNumber;
    this.sex = fromList(LIST.Sex);
  }
}
