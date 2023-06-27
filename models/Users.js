const { model, Schema } = require("mongoose")
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },
  age: {
    type: Number,
    default: 0,
    required: true
  },
  password: {
    type: String,
    minlength: [6, 'Password must be at least 6 characters long'],
    maxlength: [128, 'Password cannot exceed more than 128 character'],
    required: true,
  }
});

const User = model("users", UserSchema);

module.exports = User