import { createTestClient } from 'apollo-server-testing';
import { insertIntakeForm, intakeFormQuery } from './sample-queries';
import { derivePetitions } from './utilities';
import createServer from '../../../server/create-graphql-server';

import { sampleForm } from './sample-queries';

describe('mutation insertIntakeForm', () => {
  it('should create an intake form', async () => {
    const mutation = insertIntakeForm;
    const { mutate } = createTestClient(createServer());
    const { data, errors } = await mutate({ mutation });

    expect(errors).toEqual(undefined);
    expect(data.insertIntakeForm).toEqual({
      ...sampleForm,
      petitions: derivePetitions(sampleForm),
    });
  });
});

describe('query intakeForms', () => {
  it('should return all intake forms', async () => {
    const { query } = createTestClient(createServer());
    const { data, errors } = await query({ query: intakeFormQuery });

    expect(errors).toEqual(undefined);
    expect(data.intakeForms).toEqual([
      {
        ...sampleForm,
        petitions: derivePetitions(sampleForm),
      },
    ]);
  });
});
