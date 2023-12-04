const express = require("express");
const mongoose = require("mongoose");

const SignUpSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  howDidYouHear: [String],
});

const signUpModel = mongoose.model("singupData", SignUpSchema);
module.exports = signUpModel;
