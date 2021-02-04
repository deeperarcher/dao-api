import mongoose from 'mongoose';
import { ObjectID } from 'mongodb';
const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function () {
  return this.toString();
};

const ListingSchema = new Schema({
  adjudications: [
    {
      adjudicationType: String,
      chargeIDs: [String],
      date: String,
      reasons: [String],
    },
  ],
  admissions: [
    {
      admissionType: String,
      chargeIDs: [String],
      date: String,
      result: String,
    },
  ],
  certifications: [
    {
      date: String,
      petitionNumbers: [String],
    },
  ],
  chargeGradeEvents: [
    {
      date: String,
      chargeIDs: [String],
      grade: String,
    },
  ],
  continuances: [
    {
      continuanceType: String,
      date: String,
      listingStatus: String,
      petitionNumbers: [String],
      reasons: [String],
    },
  ],
  courtDate: {
    courtroom: {
      name: String,
    },
    date: String,
  },
  courtOrders: [
    {
      courtOrderType: String,
      isSupervision: Boolean,
      order: String,
      petitionNumbers: [String],
      serviceProvider: String,
      reasons: [String],
    },
  ],
  DA: String,
  ID: { required: true, type: String, unique: true },
  legalStatusEvents: [
    {
      date: String,
      dischargeNature: String,
      dischargeOutcome: String,
      eventType: String,
      petitionNumbers: [String],
      reasons: [String],
      status: String,
    },
  ],
  listingType: String,
  nextListing: {
    courtroom: {
      name: String,
    },
    date: String,
  },
  note: String,
});

export default mongoose.model('Listing', ListingSchema);
