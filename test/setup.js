import 'regenerator-runtime/runtime';
import mongoose from 'mongoose';

jest.setTimeout(10000);

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URL, {
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    poolSize: 10,
    useCreateIndex: true,
    useNewUrlParser: true,
  });
  mongoose.Promise = Promise;

  for (const i in mongoose.connection.collections) {
    try {
      await mongoose.connection.collections[i].drop();
    } catch (e) {}
  }
});

beforeEach(async () => {
  // await seedDb();
});

afterAll(async () => {
  await mongoose.connection.close();
});
