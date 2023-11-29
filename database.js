var mysql = require('mysql');
var connection = mysql.createConnection({

  host     : 'localhost',
  database : 'ayudantiamapache',
  user     : 'root',
  password : 'password'
});

module.exports = connection;