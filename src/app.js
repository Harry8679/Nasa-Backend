const express = require('express');
const app = express();
const planetsRoutes = require('./routes/planets/planets.route');

app.use(express.json());
app.use('/api/v1/planets', planetsRoutes);

module.exports = app;