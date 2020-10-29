import ChargeCategory from './charge-category';
import ChargeGrade from './charge-grade';
import Courtroom from './courtroom';
import Diagnosis from './diagnosis';
import IncidentType from './incident-type';
import LegalStatus from './legal-status';
import Race from './race';
import Relation from './relation';
import Sex from './sex';
import SupervisionType from './supervision-type';
import TraumaType from './trauma-type';
import Treatment from './treatment';

const withKeys = obj => ({
  ...obj,
  keys: Object.keys(obj),
});

export default {
  ChargeCategory: withKeys(ChargeCategory),
  ChargeGrade: withKeys(ChargeGrade),
  Courtroom: withKeys(Courtroom),
  Diagnosis: withKeys(Diagnosis),
  IncidentType: withKeys(IncidentType),
  LegalStatus: withKeys(LegalStatus),
  Race: withKeys(Race),
  Relation: withKeys(Relation),
  Sex: withKeys(Sex),
  SupervisionType: withKeys(SupervisionType),
  TraumaType: withKeys(TraumaType),
  Treatment: withKeys(Treatment),
};
