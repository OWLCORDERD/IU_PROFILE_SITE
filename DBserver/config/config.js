const mysql = require("mysql");

const db = mysql.createPool({
  host: "175.119.224.137",
  port: "3306",
  user: "root",
  password: "Owl37124!",
  database: "iyou",
});

module.exports = db;
