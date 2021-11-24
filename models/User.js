const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    trimmed: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  thoughts: [
    {
      type: Schema.ObjectId,
      ref: 'Thought'
    }
  ],
  friends: [
    {
      type: Schema.ObjectId,
      ref: 'User'
    }
  ],
});

const User = model('User', UserSchema);

module.exports = User;
