require('dotenv').config();

import express from 'express';
import mongoose from 'mongoose';

import createServer from './create-graphql-server';

const db = process.env.mongoURI;
const port = process.env.PORT || '4000';

mongoose
  .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const app = express();
const server = createServer();

server.applyMiddleware({ app });
app.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
);
