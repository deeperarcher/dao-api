import { createTestClient } from 'apollo-server-testing';
import createServer from '../../../server/create-graphql-server';
import { youthQuery, youthsQuery } from './test-data';
import IntakeFormModel from '../../../server/models/IntakeForm';
import Listing from '../../../server/models/Listing';

import Youth from '../../../test/mocks/Youth';

xdescribe('query youth', () => {
  describe('with only PID argument', () => {
    it('should return all data on a youth', async () => {
      const youth = new Youth();
      const intakeData = youth.generateIntakeData();
      await IntakeFormModel.create(intakeData);

      const listingData = youth.generateListings(1)[0];
      await Listing.create(listingData);

      const { query } = createTestClient(createServer());
      const { data, errors } = await query({
        query: youthQuery,
        variables: { PID: youth.PID },
      });

      expect(errors).toEqual(undefined);
      expect(data.youth.firstName).toEqual(intakeData.firstName);
      expect(data.youth.lastName).toEqual(intakeData.lastName);
      expect(data.youth.dateOfBirth).toEqual(intakeData.dateOfBirth);
      expect(data.youth.listings[0].courtroom).toEqual(listingData.courtroom);

      // TODO: the rest of the comparison, maybe w. 2 intakes.
    });
  });
});

xdescribe('query youths', () => {
  it('should return all youths', async () => {
    const { query } = createTestClient(createServer());
    const { data, errors } = await query({ query: youthsQuery });

    expect(errors).toEqual(undefined);
    expect(data).toEqual({});
  });
});
