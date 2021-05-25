'use strict';

const express = require('express');
const authRouter = express.Router();




const User = require('./models/users.js');
const basicAuth = require('./middleware/basic.js');
const bearerAuth = require('./middleware/bearer.js');

authRouter.post('/signup', async (req, res, next) => {
  try {
    let user = new User(req.body);
    const userRecord = await user.save();
    const output = {
      user: userRecord,
      token: userRecord.token,
    };
    res.status(201).json(output);//
  } catch (e) {
    next(e.message);
  }
});

authRouter.post('/signin', basicAuth, (req, res,next) => { //
  const user = {
    user: req.user,
    token: req.user.token,
  };
  res.cookie('cookie-token', user.token);
  res.set('cookie-token', user.token);
  res.status(200).json(user);
});

authRouter.get('/users', bearerAuth, async (req, res, next) => {
  // const users = await User.find();
  // const list = users.map(user => user.username); // this will list all the names which is un-logical to get all users with one token 
  await res.status(200).json({user : req.user.username});
});

authRouter.get('/secret', bearerAuth, async (req, res, next) => {
  res.status(200).send('Welcome to the secret area!');
});


module.exports = authRouter;
