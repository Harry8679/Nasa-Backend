const express = require('express');
// const { launches } = require('../../models/launches.model');
const { httpGetAllLaunches } = require('../../controllers/launches/launches.controller');

const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches);

module.exports = launchesRouter;