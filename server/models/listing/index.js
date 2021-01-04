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
  continuances: [
    {
      date: String,
      listingStatus: String,
      petitionNumbers: [String],
      reasons: [String],
    },
  ],
  courtOrderEvents: [
    {
      eventType: String,
      isSupervision: Boolean,
      order: String,
      petitionNumbers: [String],
      provider: String,
      reasons: [String],
    },
  ],
  courtroom: { required: true, type: String },
  date: { required: true, type: String },
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
  nextListingDate: String,
  nextListingLocation: String,
  notes: String,
  PID: { required: true, type: Number },
});

export default mongoose.model('Listing', ListingSchema);
