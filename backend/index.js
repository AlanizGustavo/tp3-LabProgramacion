const app = require('../app.js');
const connectDB = require('./database.js');

app.listen(app.get('port'), () => {
    console.log(`Servidor escuchando en puerto: ${app.get('port')}`);
})

//Connect to MongoDB
connectDB();