import mongoose from 'mongoose';
import { ObjectID } from 'mongodb';
const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function () {
  return this.toString();
};

const ListingSchema = new Schema({
  adjudications: [
    {
      chargeIDs: [String],
      date: String,
      reasons: [String],
    },
  ],
  admissions: [
    {
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
      date: String,
      isSupervision: Boolean,
      order: String,
      petitionNumbers: [String],
      reasons: [String],
      serviceProvider: String,
    },
  ],
  DA: String,
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
  PID: { required: true, type: String },
});

export default mongoose.model('Listing', ListingSchema);
