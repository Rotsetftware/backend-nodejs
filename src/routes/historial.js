const express = require("express");
const router = express.Router();

const mysqlConnection = require("../database.js");

// Obtener un usuario
router.get("/:id", (req, res) => {
    const { id } = req.params;
    mysqlConnection.query(
      "SELECT * FROM historial WHERE sala  = ?",
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
  const { puntajeTotal, fecha, matricula, equipo, sala } = req.body;
  const query =
    "INSERT INTO `historial` (`idHistorial`, `puntajeTotal`, `fecha`, `matricula`, `equipo`, `sala`) VALUES (NULL,?,?,?,?,?)";
  mysqlConnection.query(
    query,
    [puntajeTotal, fecha, matricula, equipo, sala],
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
