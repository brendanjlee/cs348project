const mysql = require('mysql2');
const dbConfig = require('../config/db.config');

// connect to database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
})

// open connetion
connection.connect(error => {
  if (error) throw error;
  console.log(`Connected to database: ${dbConfig.DB}`);
});

module.exports= connection;