import IntakeForm from '../../../server/models/intake-form';
import { normalizeIntakeForm } from './utilities';

export default {
  Query: {
    intakeForm: async (parent, { _id }, context, info) =>
      await IntakeForm.findOne({ _id })
        .exec()
        .then(form => normalizeIntakeForm(form.toObject())),
    intakeForms: async (parent, args, context, info) =>
      await IntakeForm.find({})
        .populate()
        .exec()
        .then(forms => forms.map(form => normalizeIntakeForm(form.toObject()))),
  },
  Mutation: {
    insertIntakeForm: async (parent, args, context, info) => {
      const newIntakeForm = await new IntakeForm(args.input);

      return newIntakeForm
        .save()
        .then(intakeForm => normalizeIntakeForm(intakeForm.toObject()))
        .catch(err => console.log('ERR', err));
    },
  },
};
