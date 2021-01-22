import { createTestClient } from 'apollo-server-testing';
import { insertIntakeForm, intakeFormQuery, response } from './test-data';
import createServer from '../../../server/create-graphql-server';

describe('mutation insertIntakeForm', () => {
  it('should create an intake form', async () => {
    const { mutate } = createTestClient(createServer());
    const { data, errors } = await mutate({ mutation: insertIntakeForm });

    expect(errors).toEqual(undefined);
    expect(data.insertIntakeForm).toEqual('testintakeform1');
  });
});

describe('query intakeForms', () => {
  it('should return all intake forms', async () => {
    const { query } = createTestClient(createServer());
    const { data, errors } = await query({ query: intakeFormQuery });

    expect(errors).toEqual(undefined);
    expect(data.intakeForms).toEqual(response);
  });
});
