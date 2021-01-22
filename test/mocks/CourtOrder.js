import * as faker from 'faker';
import LIST from '../input-lists';

export default class CourtOrder {
  constructor(petitionNumbers) {
    this.isSupervision = faker.random.boolean();
    this.petitionNumbers = faker.random.arrayElements(petitionNumbers);
    this.order = fromList(
      this.isSupervision ? LIST.SupervisionType : LIST.ConditionType
    );
    this.provider = faker.random.words(2);
    this.eventType = 'ORDERED';
    this.reasons = intoArray(3, () => faker.random.words(2));
  }
}
