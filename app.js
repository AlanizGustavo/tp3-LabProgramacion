const express = require('express');
const path = require('path');
const cors = require('cors');
const routeVhiculos = require('./backend/routes/vehiculos');

const vehiculos = require('./vehiculos.json');

const app = express();

// Declare routes
app.use(routeVhiculos);


// Init middleware
app.use(cors());


app.set('port', process.env.PORT || 9000);
app.use(express.static(path.join(__dirname, 'client')));


//routes
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: './client'});
})

module.exports = app;