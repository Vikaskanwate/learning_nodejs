const mysql = require('mysql2');

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'testdb',
    port:3306
})

conn.connect(err =>{
    if(err) throw err;
    console.log('Connected to mysql');
});

module.exports = conn;