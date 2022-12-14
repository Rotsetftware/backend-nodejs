const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// Routes
app.get("/", (req, res) => {
    res.json({ "Message": "Videojuego" })
});

app.use("/tipousuario", require('./routes/tipoUsuario'));
app.use("/juegos", require('./routes/juegos'));
app.use("/niveles", require('./routes/niveles'));
app.use("/preguntas", require('./routes/preguntas'));
app.use("/historial", require('./routes/historial'));
app.use("/users", require('./routes/users'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});