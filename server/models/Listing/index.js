import { ObjectID } from 'mongodb';
import mongoose from 'mongoose';
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
      chargeIDs: [String],
      date: String,
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
  courtOrderEvents: [
    {
      date: String,
      eventType: { required: true, type: String },
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
