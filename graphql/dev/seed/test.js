import { createTestClient } from 'apollo-server-testing';

import createServer from '../../../server/create-graphql-server';
import { clearDB } from '../../../server/utilities';

beforeAll(async () => await clearDB());

describe('mutation seed', () => {
  it('should return intakeForms and listings', async () => {
    const { mutate } = createTestClient(createServer());
    const mutation = `
      mutation {
        seed(
          input: {
            numberOfIntakesPerYouth: 1
            numberOfListingsPerYouth: 1
            numberOfYouths: 1
          }
        ) {
          intakeForms {
            youth {
              PID
            }
          }
          listings {
            PID
          }
        }
      }
    `;

    const { data, errors } = await mutate({ mutation });

    expect(errors).toEqual(undefined);
    expect(data.seed.intakeForms.length).toEqual(1);
    expect(data.seed.listings.length).toEqual(1);
    expect(typeof data.seed.intakeForms[0].youth.PID).toBe('string');
    expect(typeof data.seed.listings[0].PID).toBe('string');
  });
});
