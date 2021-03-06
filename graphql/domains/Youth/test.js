import { createTestClient } from 'apollo-server-testing';

import createServer from '../../../server/create-graphql-server';
import IntakeForm from '../../../test/mocks/IntakeForm';
import Listing from '../../../test/mocks/Listing';
import Youth from '../../../test/mocks/Youth';

import { youthQuery, youthsQuery } from './test-data';

describe('query youth', () => {
  describe('with only PID argument', () => {
    it('should return all data on a youth', async () => {
      const youth = new Youth();
      const intakeForm = new IntakeForm({ youth });

      await intakeForm.save();

      const listing = new Listing({ intakeForms: [intakeForm], youth });

      await listing.save();

      const { query } = createTestClient(createServer());
      const { data, errors } = await query({
        query: youthQuery,
        variables: { PID: youth.PID },
      });

      expect(errors).toEqual(undefined);
      expect(data.youth.firstName).toEqual(intakeForm.youth.firstName);
      expect(data.youth.lastName).toEqual(intakeForm.youth.lastName);
      expect(data.youth.dateOfBirth).toEqual(intakeForm.youth.dateOfBirth);
      expect(data.youth.intakeForms[0].DA).toEqual(intakeForm.DA);
      expect(data.youth.listings[0].note).toEqual(listing.note);
    });
  });
});

describe('query youths', () => {
  it('should return all youths', async () => {
    const youth = new Youth();
    const intakeForm = new IntakeForm({ youth });

    await intakeForm.save();

    const listing = new Listing({ intakeForms: [intakeForm], youth });

    await listing.save();

    const { query } = createTestClient(createServer());
    const { data, errors } = await query({ query: youthsQuery });

    const newYouth = data.youths.filter(y => y.PID === youth.PID)[0];

    expect(errors).toEqual(undefined);
    expect(data.youths.length).toEqual(2);
    expect(newYouth.firstName).toEqual(youth.firstName);
    expect(newYouth.lastName).toEqual(youth.lastName);
    expect(newYouth.dateOfBirth).toEqual(youth.dateOfBirth);
    expect(newYouth.intakeForms[0].note).toEqual(intakeForm.note);
    expect(newYouth.listings[0].DA).toEqual(listing.DA);
  });
});
