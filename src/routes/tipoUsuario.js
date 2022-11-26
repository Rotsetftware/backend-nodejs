const express = require("express");
const router = express.Router();

const mysqlConnection = require("../database.js");

// Obtener todos los usuarios
router.get("/get", (req, res) => {
  mysqlConnection.query("SELECT * FROM tipousuario", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

// Obtener un usuario
router.get("/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    "SELECT * FROM juegos WHERE idNivel = ?",
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

module.exports = router;
