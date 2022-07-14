const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true, // email has to be unique
      },
      password: {
        type: String,
        required: true,
      },
      isAdmin: {
        type: Boolean,  // isAdmin is a boolean could be true or false
        required: true,
        default: false, // default value is false
      },
      pic: {
        type: String,
        required: true,
        default:
          "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      },
    },
    {
      timestamps: true, // when the database was created etc
    }
  );
  const User = mongoose.model('User', userSchema);
  module.exports = User;
