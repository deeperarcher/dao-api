import { createTestClient } from 'apollo-server-testing';
import createServer from '../../../server/create-graphql-server';
import { youthQuery, youthsQuery } from './sample-queries';
import IntakeFormModel from '../../../server/models/intake-form';
import Listing from '../../../server/models/listing';

import { Youth } from '../../../test/utilities';

describe('query youth', () => {
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
      expect(data.youth.adjudications[0]).toEqual(listingData.adjudications[0]);
      expect(data.youth.admissions[0]).toEqual(listingData.admissions[0]);
      expect(data.youth.certifications[0]).toEqual(
        listingData.certifications[0]
      );
      expect(data.youth.continuances[0]).toEqual(listingData.continuances[0]);
      expect(data.youth.courtOrderEvents[0]).toEqual(
        listingData.courtOrderEvents[0]
      );
      expect(data.youth.legalStatusEvents[0]).toEqual(
        listingData.legalStatusEvents[0]
      );
      expect(data.youth.listings[0].courtroom).toEqual(listingData.courtroom);

      // TODO: the rest of the comparison, maybe w. 2 intakes.
    });
  });

  describe('with petitionNumbers argument', () => {
    it('should return all data on a youth for those petitions', async () => {
      const youth = new Youth();
      const intakeData = youth.generateIntakeData();
      await IntakeFormModel.create(intakeData);

      const listingData = youth.generateListings(1)[0];
      await Listing.create(listingData);

      const { query } = createTestClient(createServer());
      const { data, errors } = await query({
        query: youthQuery,
        variables: {
          PID: youth.PID,
          petitionNumbers: [intakeData.petitions[0].petitionNumber],
        },
      });

      expect(errors).toEqual(undefined);
      expect(data.youth.firstName).toEqual(intakeData.firstName);
      expect(data.youth.lastName).toEqual(intakeData.lastName);
      expect(data.youth.dateOfBirth).toEqual(intakeData.dateOfBirth);
      expect(data.youth.petitions).toEqual([intakeData.petitions[0]]);
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
