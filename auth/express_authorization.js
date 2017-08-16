/* global require module process*/

/*
Author: Sean Kelly
Description: a simple authrizationa and token signing functions
this script requires installation of dotenv and jsonwebtoken npm packages
run: npm install --save-dev jsonwebtoken dotenv
*/

require('dotenv').config();
const jwt = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
  'use strict';

  const token = req.body.cookies('token');

  jwt.compare(token, process.env.JWT_SECRET)
  .then((response) => {
    if (response) {
      next();
    }
  })
  .catch((err) => {
    next(err);
  });
};

const signToken = (user) => {
  'use strict';

  return jwt.sign({ name: user.name, id: user.id }, process.env.JWT_SECRET);
};

module.exports = {
  checkAuth: checkAuth(),
  signToken: signToken()
};
