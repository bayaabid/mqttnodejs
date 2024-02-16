'use strict';

const express = require('express');
const Router = express.Router();

const ApiRouter = require('./api');

Router.use('/api', ApiRouter);
//Router.use('/auth', AuthenticationRouter);

module.exports = Router;