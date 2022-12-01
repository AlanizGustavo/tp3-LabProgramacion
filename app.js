const express = require('express');
const path = require('path');
const cors = require('cors');
const routeVhiculos = require('./backend/routes/routeVehiculos');
const routePersonas = require('./backend/routes/routePersonas');

const app = express();

// Init middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Declare routes
app.use(routeVhiculos);
app.use(routePersonas);



app.set('port', process.env.PORT || 9000);
app.use(express.static(path.join(__dirname, 'client')));


//routes
app.get('/', (req, res) => { 
    res.sendFile('index.html', {root: './client'});
})

module.exports = app;