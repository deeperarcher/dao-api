import mongoose from 'mongoose';

import IntakeForm from './models/IntakeForm';
import MockIntakeForm from '../test/mocks/IntakeForm';

const db = process.env.mongoURI;

mongoose
  .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('Generating seed data...'))
  .then(() => {
    const tenTimes = new Array(10).fill();
    tenTimes.forEach(() => {
      IntakeForm.create(new MockIntakeForm());
    });
  })
  .then(() => console.log('DB seed complete!'))
  .catch(err => console.log(err));
