const mysql = require("mysql");
const fs = require('fs');

const mysqlConnection = mysql.createConnection({

    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database: 'plataforma'

  host:"braqueteserver.mysql.database.azure.com",
  user:"braquetes",
  password:"Dif*137946",
  database:"plataforma",
  port:3306,
//   ssl:{ca:fs.readFileSync("DigiCertGlobalRootCA.crt.pem")}

});

mysqlConnection.connect(function(err) {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log("Database is connected");
    }
});

module.exports = mysqlConnection;