import mongoose from 'mongoose';

import IntakeForm from './models/IntakeForm';
import MockIntakeForm from '../test/mocks/IntakeForm';

const { IntakeForm } = Models;
const db = process.env.mongoURI;
const port = process.env.PORT || '4000';

mongoose
  .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('Generating seed data...'))
  .then(() => {
    const youths = new Array(10).fill().map(() => new Youth());
    youths.forEach(youth => {
      IntakeForm.create(youth.generateIntakeData());
      IntakeForm.create(youth.generateIntakeData());
      IntakeForm.create(youth.generateIntakeData());
    });
  })
  .then(() => console.log('DB seed complete!'))
  .catch(err => console.log(err));
