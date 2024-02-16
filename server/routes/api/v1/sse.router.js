'use strict';

const express = require('express');
const SseRouter = express.Router();

const { SseMiddleware } = require('../../../middleware');
const { SseController } = require('../../../controllers');

SseRouter.route('/')
  .get(SseMiddleware.enrich, SseController.subscribe)
  .post(SseController.publish);

module.exports = SseRouter;