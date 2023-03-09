const { Schema, model } = require("mongoose");

const userSchema = Schema({
  usrNme: {
    type: String,
    unique: true,
    required: true,
    trimmed: true

  },
});
