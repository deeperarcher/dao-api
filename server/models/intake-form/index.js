import mongoose from 'mongoose';
import { ObjectID } from 'mongodb';
import enums from '../../../enums';
const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function () {
  return this.toString();
};

const IntakeFormSchema = new Schema({
    PID: { required: true, type: Number },
    firstName: { required: true, type: String },
    lastName: { required: true, type: String },
    dateOfBirth: { required: true, type: Date },
    sex: { enum: enums.Sex, type: String },
    race: { enum: enums.Race, type: String },
    isLatino: Boolean,
    phoneNumber: Number,
    address1: String,
    address2: String,
    zip: String,

    guardian1FirstName: String,
    guardian1LastName: String,
    guardian1Relation: { enum: enums.Relation, type: String },

    guardian2FirstName: String,
    guardian2LastName: String,
    guardian2Relation: { enum: enums.Relation, type: String },

    date: Date,
    knownTime: { required: true, type: Boolean },
    timeOfDAReferral: Date,
    arrestingDistrict: Number,
    officers: [Number], //payroll#

});

export default mongoose.model('IntakeForm', IntakeFormSchema);
