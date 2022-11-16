const express = require('express');
const path = require('path');
const cors = require('cors')

const vehiculos = require('./vehiculos.json');

const app = express();

// Init middleware
app.use(cors());
//app.use(express.json());


app.set('port', process.env.PORT || 9000);
app.use(express.static(path.join(__dirname, 'client')));


//routes
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: './client'});
})

app.get('/api/vehiculos', (req, res) => {
    res.send(vehiculos.sort((a,b) => {
        return b.puntaje - a.puntaje;
    }));
})

app.get('/api/vehiculos/top3', (req,res) => {
    let posiciones = vehiculos.sort((a, b) => {
        return b.puntaje - a.puntaje;
    }).slice(0,3);
    res.send(posiciones);
});

app.get('/api/vehiculos/:nombre', (req,res) => {
    const nombre = req.params.nombre;
    const filtrado = vehiculos.filter( vehiculo => {
       return vehiculo.piloto.toLowerCase().includes(nombre);
    })
    res.send(filtrado);
});

// Declare routes
// app.use();
// app.use();
// app.use();

module.exports = app;