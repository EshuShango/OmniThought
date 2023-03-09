const { Schema, model } = require("mongoose");

const userSchema = Schema({
  usrNme: {
    type: String,
    unique: true,
    required: true,
    trimmed: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match:
    /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})|([^\s@]+@[^\s@]+\.[^\s@]+)$/
  }, 
  thoughts: {
    type: 
  }
});
