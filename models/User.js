const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number,
    required: true
  },
  caste: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true
  },
  height: {
    type: String,
    required: true
  },
  weight: {
    type: String,
    required: true
  },
  education: {
    type: String,
    required: true
  },
  working: {
    type: String,
    required: true
  },
  companyname: {
    type: String,
    required: true
  },
  income_per_month: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  otp: {
    type: Number // Optional
  },
  image: {
    type: String // Optional
  },
  date: {
    type: Date,
    default: Date.now // Optional, auto-filled
  }
});

const User = mongoose.model('user', UserSchema);
module.exports = User;
