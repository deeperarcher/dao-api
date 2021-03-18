import LIST from '../input-lists';

import { fromList, intoArray } from './utilities';

export default class Evaluation {
  constructor() {
    this.diagnoses = intoArray(3, () => fromList(LIST.Diagnosis));
    this.traumas = intoArray(3, () => fromList(LIST.TraumaType));
    this.treatments = intoArray(3, () => fromList(LIST.Treatment));
  }
}
