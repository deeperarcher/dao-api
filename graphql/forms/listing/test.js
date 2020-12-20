import { createTestClient } from 'apollo-server-testing';
import { insertListing, listingQuery } from './sample-queries';
import createServer from '../../../server/create-graphql-server';

import { sampleForm } from './sample-queries';

describe('mutation insertListing', () => {
  it('should create an intake form', async () => {
    const mutation = insertListing;
    const { mutate } = createTestClient(createServer());
    const { data, errors } = await mutate({ mutation });

    expect(errors).toEqual(undefined);
    expect(data.insertListing).toEqual(sampleForm);
  });
});

describe('query listings', () => {
  it('should return all listings', async () => {
    const { query } = createTestClient(createServer());
    const { data, errors } = await query({ query: listingQuery });

    expect(errors).toEqual(undefined);
    expect(data.listings).toEqual([sampleForm]);
  });
});
