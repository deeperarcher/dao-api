require('dotenv').config();

import mongoose from 'mongoose';
import express from 'express';

import createServer from './create-graphql-server';

const db = process.env.mongoURI;
const port = process.env.PORT || '4000';

mongoose
  .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const app = express();
const server = createServer();

server.applyMiddleware({ app });
app.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
);
