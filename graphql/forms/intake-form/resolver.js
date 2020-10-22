import IntakeForm from '../../../server/models/intake-form';

export default {
  Query: {
    intakeForm: async (parent, { _id }, context, info) =>
      await IntakeForm.findOne({ _id }).exec(),
    intakeForms: async (parent, args, context, info) =>
      await IntakeForm.find({}).populate().exec(),
  },
  Mutation: {
    insertIntakeForm: async (parent, args, context, info) => {
      const newIntakeForm = await new IntakeForm(args.input);

      return newIntakeForm.save().catch(err => console.log('ERR', err));
    },
  },
};
