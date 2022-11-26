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

module.exports = router;
