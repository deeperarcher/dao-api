import { DateTime } from 'luxon';

import { getIntakeForms } from './forms';
import { getInputIDDirectoryRaw } from './spreadsheets';

function deriveAgeAtArrest(f) {
  return DateTime.fromISO(f.arrest.date)
    .diff(DateTime.fromISO(f.youth.dateOfBirth), 'years')
    .years.toFixed(2);
}

function deriveAgeGroup(ageAtArrest) {
  if (ageAtArrest <= 11) {
    return '<=11';
  } else if (ageAtArrest <= 14) {
    return '12-14';
  } else if (ageAtArrest <= 17) {
    return '15-17';
  } else {
    return '18+';
  }
}

function deriveIsLatino(isLatino) {
  if (isLatino === true) {
    return 'LATINO';
  } else if (isLatino === false) {
    return 'NOT_LATINO';
  } else {
    return 'UNKNOWN';
  }
}

function addSmartFields(f) {
  const copiedForm = JSON.parse(JSON.stringify(f));

  copiedForm['evaluation']['diagnosis1'] = f.evaluation.diagnoses[0];
  copiedForm['evaluation']['diagnosis2'] = f.evaluation.diagnoses[1];
  copiedForm['evaluation']['diagnosis3'] = f.evaluation.diagnoses[2];
  copiedForm['evaluation']['diagnosis4'] = f.evaluation.diagnoses[3];
  copiedForm['evaluation']['diagnosis5'] = f.evaluation.diagnoses[4];
  copiedForm['evaluation']['trauma1'] = f.evaluation.traumas[0];
  copiedForm['evaluation']['trauma2'] = f.evaluation.traumas[1];
  copiedForm['evaluation']['trauma3'] = f.evaluation.traumas[2];
  copiedForm['evaluation']['trauma4'] = f.evaluation.traumas[3];
  copiedForm['evaluation']['trauma5'] = f.evaluation.traumas[4];
  copiedForm['evaluation']['treatment1'] = f.evaluation.treatments[0];
  copiedForm['evaluation']['treatment2'] = f.evaluation.treatments[1];
  copiedForm['evaluation']['treatment3'] = f.evaluation.treatments[2];
  copiedForm['evaluation']['treatment4'] = f.evaluation.treatments[3];
  copiedForm['evaluation']['treatment5'] = f.evaluation.treatments[4];
  copiedForm['youth']['ageAtArrest'] = deriveAgeAtArrest(f);
  copiedForm['youth']['ageGroup'] = deriveAgeGroup(
    copiedForm['youth']['ageAtArrest']
  );

  copiedForm['youth']['isLatino'] = deriveIsLatino(f.youth.isLatino);

  return copiedForm;
}

function legacyEncodeInputs(f, inputDirectory) {
  const copiedForm = JSON.parse(JSON.stringify(f));

  copiedForm['evaluation']['diagnosis1'] =
    inputDirectory['DIAGNOSIS'][f.evaluation.diagnosis1];

  copiedForm['evaluation']['diagnosis2'] =
    inputDirectory['DIAGNOSIS'][f.evaluation.diagnosis2];

  copiedForm['evaluation']['diagnosis3'] =
    inputDirectory['DIAGNOSIS'][f.evaluation.diagnosis3];

  copiedForm['evaluation']['diagnosis4'] =
    inputDirectory['DIAGNOSIS'][f.evaluation.diagnosis4];

  copiedForm['evaluation']['diagnosis5'] =
    inputDirectory['DIAGNOSIS'][f.evaluation.diagnosis5];

  copiedForm['evaluation']['trauma1'] =
    inputDirectory['TRAUMA_TYPE'][f.evaluation.trauma1];

  copiedForm['evaluation']['trauma2'] =
    inputDirectory['TRAUMA_TYPE'][f.evaluation.trauma2];

  copiedForm['evaluation']['trauma3'] =
    inputDirectory['TRAUMA_TYPE'][f.evaluation.trauma3];

  copiedForm['evaluation']['trauma4'] =
    inputDirectory['TRAUMA_TYPE'][f.evaluation.trauma4];

  copiedForm['evaluation']['trauma5'] =
    inputDirectory['TRAUMA_TYPE'][f.evaluation.trauma5];

  copiedForm['evaluation']['treatment1'] =
    inputDirectory['TREATMENT'][f.evaluation.treatment1];

  copiedForm['evaluation']['treatment2'] =
    inputDirectory['TREATMENT'][f.evaluation.treatment2];

  copiedForm['evaluation']['treatment3'] =
    inputDirectory['TREATMENT'][f.evaluation.treatment3];

  copiedForm['evaluation']['treatment4'] =
    inputDirectory['TREATMENT'][f.evaluation.treatment4];

  copiedForm['evaluation']['treatment5'] =
    inputDirectory['TREATMENT'][f.evaluation.treatment5];

  copiedForm['youth']['ageGroup'] =
    inputDirectory['AGE_GROUP'][f.youth.ageGroup];

  copiedForm['youth']['isLatino'] = inputDirectory['LATINO'][f.youth.isLatino];
  copiedForm['youth']['race'] = inputDirectory['RACE'][f.youth.race];
  copiedForm['youth']['sex'] = inputDirectory['SEX'][f.youth.sex];

  return copiedForm;
}

function toCsvRow(f) {
  const row = [
    f.youth.firstName,
    f.youth.lastName,
    '[Next Court Date]',
    '[Listing Type]',
    '[Previous Court Dates]',
    f.arrest.date,
    f.initialHearing.date,
    '[Petition D/C Date]',
    '[Active or Discharged (in courtroom)?], [Legal Status], [Active Courtroom], [Active Supervision], [Active Supervision Provider], [IOP Provider], [Active B/W?], [LOS (discharged)], [LOS (active)]',
    f.youth.dateOfBirth,
    f.youth.ageAtArrest,
    f.youth.ageGroup,
    f.youth.sex,
    f.youth.race,
    f.youth.isLatino,
    ...f.youth.guardians.reduce(
      (acc, current) => [
        ...acc,
        current.firstName,
        current.lastName,
        current.relation,
      ],
      []
    ),
    f.youth.address,
    f.youth.zip,
    '[Latitude], [Longitude], [Home Violence Zone]',
    f.evaluation.diagnosis1,
    f.evaluation.diagnosis2,
    f.evaluation.diagnosis3,
    f.evaluation.diagnosis4,
    f.evaluation.diagnosis5,
    f.evaluation.trauma1,
    f.evaluation.trauma2,
    f.evaluation.trauma3,
    f.evaluation.trauma4,
    f.evaluation.trauma5,
    f.evaluation.treatment1,
    f.evaluation.treatment2,
    f.evaluation.treatment3,
    f.evaluation.treatment4,
    f.evaluation.treatment5,
    f.youth.phoneNumber,
    f.youth.school,
    f.youth.grade,
  ];

  return row.join(',  ');
}

export const getLegacyExport = async () => {
  const intakeForms = await getIntakeForms();
  const inputDirectory = await getInputIDDirectoryRaw();

  return intakeForms
    .map(addSmartFields)
    .map(form => legacyEncodeInputs(form, inputDirectory))
    .map(toCsvRow)
    .join('\n');
};

export const getInputIDDirectory = async () => {
  const payload = await getInputIDDirectoryRaw();

  return JSON.stringify(payload);
};
