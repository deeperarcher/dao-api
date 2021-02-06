import { createTestClient } from 'apollo-server-testing';
import createServer from '../../../server/create-graphql-server';

describe('mutation seed', () => {
  it('should return true', async () => {
    const { mutate } = createTestClient(createServer());
    const mutation = `
      mutation {
        seed(
          input: {
            youthCount: 1
            intakesPerYouth: 1
            listingsPerYouth: 1
            shouldClearFirst: false
          }
        ) {
          IntakeForms {
            ID
          }

          Listings {
            ID
          }
        }
      }`;
    const { data, errors } = await mutate({ mutation });

    expect(errors).toEqual(undefined);
    expect(data.seed.IntakeForms.length).toEqual(1);
    expect(typeof data.seed.IntakeForms[0].ID).toBe('string');
    expect(data.seed.Listings.length).toEqual(1);
    expect(typeof data.seed.Listings[0].ID).toBe('string');
  });
});
