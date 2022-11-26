const express = require("express");
const router = express.Router();

const mysqlConnection = require("../database.js");

// Obtener todos los usuarios
router.get('/get', (req, res) => {
  mysqlConnection.query('SELECT * FROM usuarios', (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

// Obtener un usuario
router.get('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('SELECT * FROM usuarios WHERE idUsuario = ?', [id], (err, rows, fields) => {
    if (!err) {
      if (rows != '') {
        res.json(rows[0]);
      } else {
        res.json({ status: "User not found" })
      }
    } else {
      console.log(err);
    }
  });
});

// Obtener un usuario
router.get('/deleteImg/:id', (req, res) => {
  const { id } = req.params;
  const img = 'http://localhost/videojuego/subidas/logo.png';
  mysqlConnection.query('UPDATE `usuarios` SET `img` = ? WHERE `idUsuario` = ?', [img, id], (err, rows, fields) => {
    if (!err) {
      if (rows != '') {
        res.json({ status: "Foto eliminada" })
      } else {
        res.json({ status: "User not found" })
      }
    } else {
      console.log(err);
    }
  });
});

// Ruta para hacer el login
router.post("/login", (req, res) => {

  let correo = req.body.correo
  let password = req.body.password

  query = `SELECT * FROM usuarios WHERE correo = '${correo}' AND password = '${password}'`

  mysqlConnection.query(query, (err, rows, fields) => {
    if (!err) {
      if (rows != '') {
        res.json(rows[0]);
      } else {
        res.json({ status: "User not found" })
      }
    } else {
      return res.status(500).json({
        message: 'Error',
        error: err
      })
    }
  });
});

// // DELETE An User
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM usuarios WHERE idUsuario = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'User Deleted' });
    } else {
      console.log(err);
    }
  });
});

// // INSERT An User
router.post('/create', (req, res) => {
  const { correo, nombres, apellidos, matricula, password, tipoUsuario } = req.body;
  const img = 'http://localhost/videojuego/subidas/logo.png';
  const codigo = 'bler';
  mysqlConnection.query('SELECT * FROM usuarios WHERE correo = ?', [correo], (err, rows, fields) => {
    if (rows != '') {
      res.json({ status: 'El correo ya ha sido registrado' });
    } else {
      mysqlConnection.query('SELECT * FROM usuarios WHERE matricula = ?', [matricula], (err, rows, fields) => {
        if (rows != '') {
          res.json({ status: 'La matricula ya ha sido registrada' });
        } else {

          mysqlConnection.query('INSERT INTO `usuarios` (`idUsuario`, `correo`, `nombres`, `apellidos`, `matricula`, `password`, `img`, `tipoUsuario`, `codigo`) VALUES (NULL,?,?,?,?,?,?,?,?);',
            [correo, nombres, apellidos, matricula, password, img, tipoUsuario, codigo], (err, rows, fields) => {
              if (rows) {
                res.json({ status: 'Usuario registrado' });
              } else {
                res.json({
                  status: err,
                })
              }
            });
        }
      });
    }
  });
});

// //  Update User
router.put('/:id', (req, res) => {
  const { nombres, correo, apellidos, matricula } = req.body;
  const { id } = req.params;

  mysqlConnection.query('SELECT * FROM usuarios WHERE correo = ?', [correo], (err, rows, fields) => {
    if (rows != '') {
      res.json({ status: 'El correo ya ha sido registrado' });
    } else {
      mysqlConnection.query('SELECT * FROM usuarios WHERE matricula = ?', [matricula], (err, rows, fields) => {
        if (rows != '') {
          res.json({ status: 'La matricula ya ha sido registrada' });
        } else {
          mysqlConnection.query('UPDATE `usuarios` SET `nombres` = ?, `apellidos` = ?, `matricula` = ?, `correo` = ? WHERE `idUsuario` = ? ', [nombres, apellidos, matricula, correo, id], (err, rows, fields) => {
            if (!err) {
              res.json({ status: 'Usuario actualizado' });
            } else {
              console.log(err);
            }
          });
        }
      });
    }
  });
});

// //  Update User
router.put('/img/:id', (req, res) => {
  const { url } = req.body;
  const { id } = req.params;

  mysqlConnection.query('UPDATE `usuarios` SET `img` = ? WHERE `idUsuario` = ?', [url, id], (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'Usuario actualizado' });
    } else {
      console.log(err);
    }
  });
});

// Update codigo
router.put('/codigo/:correo', (req, res) => {
  const { codigo } = req.body;
  const { correo } = req.params;

  mysqlConnection.query('UPDATE `usuarios` SET `codigo` = ? WHERE `correo` = ?', [codigo, correo], (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'Codigo actualizado' });
    } else {
      console.log(err);
    }
  });
});

// Comprobar codigo de un usuario
router.get('/comprobar/:correo', (req, res) => {
  const { correo } = req.params;
  mysqlConnection.query('SELECT * FROM usuarios WHERE correo = ?', [correo], (err, rows, fields) => {
    if (!err) {
      if (rows != '') {
        res.json(rows[0]);
      } else {
        res.json({ status: "User not found" })
      }
    } else {
      console.log(err);
    }
  });
});

// Comprobar codigo de un usuario
router.put('/restaurar/:correo', (req, res) => {
  const { passNew } = req.body;
  const { correo } = req.params;
  mysqlConnection.query('UPDATE `usuarios` SET `password` = ? WHERE `correo` = ?', [passNew, correo], (err, rows, fields) => {
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
});

// //  Delete User
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  mysqlConnection.query('DELETE FROM `usuarios` WHERE `idUsuario` = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'Usuario actualizado' });
    } else {
      console.log(err);
    }
  });
});

module.exports = router;