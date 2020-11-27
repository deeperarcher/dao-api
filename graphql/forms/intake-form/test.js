import { createTestClient } from 'apollo-server-testing';
import { insertIntakeForm } from './sample-queries';
import createServer from '../../../server/create-graphql-server';

describe('createIntakeForm', () => {
  it('should create an intake form', async () => {
    const mutation = insertIntakeForm;
    const { mutate } = createTestClient(createServer());
    const response = await mutate({ mutation });

    expect(response).toEqual('The whole intakeForm back');
  });
});
