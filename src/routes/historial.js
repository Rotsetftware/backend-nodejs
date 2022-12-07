const express = require("express");
const router = express.Router();

const mysqlConnection = require("../database.js");

// Obtener todos los usuarios
router.get("/get", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM historial",
    (err, rows, fields) => {
      if (!err) {
        if (rows) {
          res.json(rows);
        } else {
          res.json({ status: "Juego no encontrado" });
        }
      } else {
        console.log(err);
      }
    }
  );
});

// Obtener un usuario
router.get("/:id", (req, res) => {
    const { id } = req.params;
    mysqlConnection.query(
      "SELECT * FROM historial WHERE matricula  = ?",
      [id],
      (err, rows, fields) => {
        if (!err) {
          if (rows != "") {
            res.json(rows);
          } else {
            res.json({ status: "Juego no encontrado" });
          }
        } else {
          console.log(err);
        }
      }
    );
  });

router.post("/create", (req, res) => {
  const { puntajeTotal, nivel, juego, correctas, incorrectas, matricula, equipo, sala } = req.body;
  const query =
  "INSERT INTO `historial` (`idHistorial`, `idNivel`, `idJuego`, `puntajeTotal`, `fecha`, `matricula`, `equipo`, `sala`, `correctas`, `incorrectas`) VALUES (NULL,1,1,0,curdate(),?,?,?,0,0);";
  mysqlConnection.query(
    query,
    [matricula, equipo, sala],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Jugador agregado" });
      } else {
        console.log(err);
      }
    }
  );
});

// Comprobar codigo de un usuario
router.get('/correcto/:matricula/:sala', (req, res) => {
  const { matricula,sala } = req.params;
  console.log(matricula);
  console.log(sala);
  mysqlConnection.query(
    "SELECT * FROM historial WHERE matricula  = ? && sala = ?",
    [matricula, sala],
    (err, rows, fields) => {
      if (!err) {
        if (rows != "") {
          console.log(rows[0].correctas);
          const correcta = rows[0].correctas;
          const puntajeTotal = rows[0].puntajeTotal;
          mysqlConnection.query('UPDATE `historial` SET `correctas` = ?, `puntajeTotal` = ? WHERE `matricula` = ? && `sala` = ?', [correcta+1,puntajeTotal+10, matricula, sala], (err, rows, fields) => {
            if (!err) {
              if (rows) {
                res.json({ status: 'Usuario registrado' });
              } else {
                res.json({
                  status: 'Error',
                })
              }
            }
          });

        } else {
          res.json({ status: "Juego no encontrado" });
        }
      } else {
        console.log(err);
      }
    }
  );
});

// Comprobar codigo de un usuario
router.get('/incorrecto/:matricula/:sala', (req, res) => {
  const { matricula,sala } = req.params;
  console.log(matricula);
  console.log(sala);
  mysqlConnection.query(
    "SELECT * FROM historial WHERE matricula  = ? && sala = ?",
    [matricula, sala],
    (err, rows, fields) => {
      if (!err) {
        if (rows != "") {
          console.log(rows[0].incorrectas);
          const incorrecta = rows[0].incorrectas;
          mysqlConnection.query('UPDATE `historial` SET `incorrectas` = ? WHERE `matricula` = ? && `sala` = ?', [incorrecta+1, matricula, sala], (err, rows, fields) => {
            if (!err) {
              if (rows) {
                res.json({ status: 'Usuario registrado' });
              } else {
                res.json({
                  status: 'Error',
                })
              }
            }
          });

        } else {
          res.json({ status: "Juego no encontrado" });
        }
      } else {
        console.log(err);
      }
    }
  );
});


module.exports = router;
