import * as faker from 'faker';

import LIST from '../input-lists';

import { fromList } from './utilities';

export default class Guardian {
  constructor() {
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.relation = fromList(LIST.Relation);
  }
}
