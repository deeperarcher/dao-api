import IntakeForm from '../../server/models/intake-form';

export default async () => {
  await IntakeForm.create({
    isIncidentTimeKnown: true,
    dateOfBirth: '20011021',
    PID: 123445,
    firstName: 'firsty',
    lastName: 'lasty',
  }).then(res => console.log('Seeded!'));
};
