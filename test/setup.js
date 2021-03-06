import 'regenerator-runtime/runtime';
import mongoose from 'mongoose';

import { clearDB } from '../server/utilities';

jest.setTimeout(10000);

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URL, {
    keepAlive: true,
    poolSize: 10,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.Promise = Promise;

  for (const i in mongoose.connection.collections) {
    try {
      await mongoose.connection.collections[i].drop();
    } catch (e) {
      // This error happens when you try to drop a collection that's already dropped. Safe to ignore.
      if (e.message === 'ns not found') return;

      console.error('mongoose connection drop', e);
    }
  }
});

beforeEach(async () => {
  // await seedDb();
});

afterAll(async () => {
  await clearDB;
  await mongoose.connection.close();
});
