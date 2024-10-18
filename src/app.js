const express = require('express');
const cors = require('cors');
const app = express();
const planetsRoutes = require('./routes/planets/planets.route');

app.use(cors({
    origin: 'http://localhost:3030'
}));
app.use(express.json());
app.use('/api/v1/planets', planetsRoutes);

module.exports = app;