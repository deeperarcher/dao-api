import { createTestClient } from 'apollo-server-testing';
import createServer from '../../../server/create-graphql-server';
import { youthQuery, youthsQuery } from './sample-queries';
import IntakeFormModel from '../../../server/models/intake-form';

import { Youth, dateStringToMs } from '../../../test/utilities';

describe('youth query', () => {
  it('return all data on a youth', async () => {
    const youth = new Youth();
    const intakeData = youth.generateIntakeData();
    await IntakeFormModel.create(intakeData);

    const { query } = createTestClient(createServer());
    const { data, errors } = await query({
      query: youthQuery,
      variables: { PID: youth.PID },
    });

    expect(errors).toEqual(undefined);
    expect(data.youth.firstName).toEqual(intakeData.firstName);
    expect(data.youth.lastName).toEqual(intakeData.lastName);
    expect(data.youth.dateOfBirth).toEqual(
      dateStringToMs(intakeData.dateOfBirth)
    );

    // TODO: the rest of the comparison, maybe w. 2 intakes.
  });
});

xdescribe('query intakeForms', () => {
  it('should return all intake forms', async () => {
    const { query } = createTestClient(createServer());
    const { data, errors } = await query({ query: youthsQuery });

    expect(errors).toEqual(undefined);
    expect(data).toEqual({});
  });
});
