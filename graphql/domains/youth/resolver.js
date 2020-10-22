import IntakeForm from '../../../server/models/intake-form';

export default {
  Query: {
    youth: async (parent, { PID }, context, info) => {
      const intakeForms = await IntakeForm.find({ PID }).exec();
    },
  },
};
