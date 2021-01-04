import { get as getIntakeForms } from '../../forms/intake-form/services';
import IntakeForm from '../../../server/models/intake-form';
import { deriveYouth } from './utilities';

export default {
  Query: {
    youth: async (parent, { PID }, context, info) => {
      const intakeForms = await getIntakeForms({ PID });
      const intakeForms = await IntakeForm.find({ PID }).exec();

      return deriveYouth({ intakeForms });
    },
  },
};
