const mysql = require('mysql');
const options = require('./option');

const LoginData = {
    host : options.ConfigDB.host,
    port : options.ConfigDB.port,
    user : options.ConfigDB.user,
    password : options.ConfigDB.password
}

const db = mysql.createPool({
    host : LoginData.host,
    port : LoginData.port,
    user : LoginData.user,
    password : LoginData.password,
    database : 'iyou'
});

module.exports = db;