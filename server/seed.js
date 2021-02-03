import mongoose from 'mongoose';

import { clearDB, seedDB } from './utilities';

const db = process.env.mongoURI;

mongoose
  .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('Clearing data...'))
  .then(async () => clearDB())
  .then(() => console.log('Generating seed data...'))
  .then(async () => seedDB())
  .then(() => console.log('DB seed complete!'))
  .catch(err => console.log(err));
