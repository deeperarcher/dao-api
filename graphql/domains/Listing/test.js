import { createTestClient } from 'apollo-server-testing';
import { insertListing, listingQuery, response } from './test-data';
import createServer from '../../../server/create-graphql-server';

describe('mutation insertListing', () => {
  it('should create a listing', async () => {
    const { mutate } = createTestClient(createServer());
    const { data, errors } = await mutate({ mutation: insertListing });

    expect(errors).toEqual(undefined);
    expect(data.insertListing).toEqual('testlisting1');
  });
});

describe('query listings', () => {
  it('should return all listings', async () => {
    const { query } = createTestClient(createServer());
    const { data, errors } = await query({ query: listingQuery });

    expect(errors).toEqual(undefined);
    expect(data.listings).toEqual(response);
  });
});