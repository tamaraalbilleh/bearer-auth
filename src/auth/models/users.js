'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken'); // 
const users = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Adds a virtual field to the schema. We can see it, but it never persists
// So, on every user object ... this.token is now readable!
users.virtual('token').get(function () {
  let tokenObject = {
    username: this.username,
  };
  return jwt.sign(tokenObject, process.env.SECRET,
    {expiresIn: process.env.EXPIRE || '900s'},
  );});

users.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10); //
  }
});

// BASIC AUTH
users.statics.authenticateBasic = async function (username, password) {
  try { //
    const user = await this.findOne({ username });
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      return user; 
    } else { //
      throw new Error('Invalid User'); //
    } //
  } catch (error) {//
    throw new Error(error.message); //
  }
};

// BEARER AUTH
users.statics.authenticateWithToken = async function (token) {
  try {
    const parsedToken = jwt.verify(token, process.env.SECRET); 
    const user = await this.findOne({ username: parsedToken.username }); //
    if (user)
    { 
      return user;
    }else { //
      throw new Error('User Not Found'); //
    } //
  } catch (e) {
    throw new Error(e.message);
  }
};


module.exports = mongoose.model('users', users);