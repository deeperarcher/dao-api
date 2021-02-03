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
  .then(() => console.log('Clear complete!'))
  .catch(err => console.error(err));
