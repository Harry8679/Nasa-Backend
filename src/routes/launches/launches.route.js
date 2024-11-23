const express = require('express');
const { launches } = require('../../models/launches.model');
const { getAllLaunches } = require('../../controllers/launches/launches.controller');

const launchesRouter = express.Router();

launchesRouter.get('/', getAllLaunches);

module.exports = launchesRouter;