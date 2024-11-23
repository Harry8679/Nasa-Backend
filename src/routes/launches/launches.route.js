const express = require('express');
const { launches } = require('../../models/launches.model');
const { getAllLaunches } = require('../../controllers/launches/launches.controller');

const launchesRouter = express.Router();

launchesRouter.get('/', getAllLaunches);
// launchesRouter.get('/', (req, res) => {
//     res.send('Launches');
// });

module.exports = launchesRouter;

/*
const express = require('express');
const { getAllPlanets } = require('../../controllers/planets/planets.controller');

const planetsRouter = express.Router();

planetsRouter.get('/', getAllPlanets);

module.exports = planetsRouter;
*/